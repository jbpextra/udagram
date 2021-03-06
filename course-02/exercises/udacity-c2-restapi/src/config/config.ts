export const config = {
  "dev": {
    "username": process.env.UDAGRAM_DB_USERNAME,
    "password": process.env.UDAGRAM_DB_PASSWORD,
    "database": process.env.UDAGRAM_DB_NAME,
    "host": process.env.UDAGRAM_DB_HOST,
    "dialect": "postgres",
    "aws_region": process.env.AWS_REGION,
    "aws_profile": process.env.PROFILE,
    "aws_media_bucket": process.env.UDAGRAM_MEDIA_BUCKET,
    "jwt_secret":process.env.UDAGRAM_JWT_SECRET
  },
  "prod": {
      "username": process.env.UDAGRAM_DB_USERNAME,
      "password": process.env.UDAGRAM_DB_PASSWORD,
      "database": process.env.UDAGRAM_DB_NAME,
      "host": process.env.UDAGRAM_DB_HOST,
      "dialect": "postgres",
      "aws_region": process.env.AWS_REGION,
      "aws_profile": process.env.PROFILE,
      "aws_media_bucket": process.env.UDAGRAM_MEDIA_BUCKET,
      "jwt_secret":process.env.UDAGRAM_JWT_SECRET
  }
}
