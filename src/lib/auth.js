import { betterAuth } from "better-auth";
import { MongoClient , ServerApiVersion } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.MONGODB_URI,{
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
  tls: true,
  tlsAllowInvalidCertificates: true, // ← fixes the SSL error on Windows
});
const db = client.db('online-book-borrowing-platform');

export const auth = betterAuth({
  secret: process.env.BETTER_AUTH_SECRET,
  database: mongodbAdapter(db, {
    
    client
  }),
  emailAndPassword: { 
    enabled: true, 
  }, 
  socialProviders: {             
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }
  }
});