module.exports = {
  apps: [
    {
      name: "sip-blind-transfer",
      script: "app.js",
      instance_var: "INSTANCE_ID",
      exec_mode: "fork",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "production",
        LOGLEVEL: "info",
        HTTP_PORT: 3001,
        JAMBONZ_ACCOUNT_SID: "f1968ef6-3cf5-4ce7-9ea0-3b7fc403c878",
        JAMBONZ_API_KEY: "95b73b3e-3218-426d-817c-1e216bfc09bc",
        JAMBONZ_REST_API_BASE_URL: "https://cpaas61.epacific.net/api/v1",
        WEBHOOK_SECRET: "wh_secret_9CezXm9jDRMd2AJfqWVT15",
        CALLER_ID: "",
      },
    },
  ],
};
