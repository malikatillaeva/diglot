module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '71d50ba10245e073a5abdb367d8dad7b'),
  },
});
