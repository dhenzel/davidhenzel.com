interface Env {
  GHL_API_KEY: string;
  GHL_LOCATION_ID: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  try {
    const body = await context.request.json() as {
      email?: string;
      firstName?: string;
      formSource?: string;
      utmSource?: string;
      utmMedium?: string;
      utmCampaign?: string;
    };
    const { email, firstName, formSource, utmSource, utmMedium, utmCampaign } = body;

    if (!email || !email.includes('@')) {
      return new Response(JSON.stringify({ error: 'Valid email is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    const apiKey = context.env.GHL_API_KEY;
    const locationId = context.env.GHL_LOCATION_ID;
    if (!apiKey || !locationId) {
      return new Response(JSON.stringify({ error: 'Server configuration error' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    // GHL v2 API for private integration tokens
    const ghlResponse = await fetch('https://services.leadconnectorhq.com/contacts/', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'Version': '2021-07-28',
      },
      body: JSON.stringify({
        email,
        firstName: firstName || undefined,
        locationId,
        tags: [
          'newsletter',
          'davidhenzel.com',
          ...(formSource ? [`form-${formSource}`] : []),
          ...(utmSource ? [`utm-source-${utmSource}`] : []),
          ...(utmMedium ? [`utm-medium-${utmMedium}`] : []),
          ...(utmCampaign ? [`utm-campaign-${utmCampaign}`] : []),
        ],
        source: 'davidhenzel.com newsletter',
      }),
    });

    if (!ghlResponse.ok) {
      const errorText = await ghlResponse.text();
      console.error('GHL API error:', ghlResponse.status, errorText);
      return new Response(JSON.stringify({ error: 'Subscription failed. Please try again.' }), {
        status: 502,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  } catch (err) {
    console.error('Subscribe error:', err);
    return new Response(JSON.stringify({ error: 'Something went wrong' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }
};

export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
};
