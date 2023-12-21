import mongoose from 'mongoose'

const MONGO_URI = process.env.MONGO_URI

// Initialize cache variable
let cached = (global as any).mongoose || { conn: null, promise: null }

export const connectToDatabase = async () => {
  // when the connection runs for the first time
  if (cached.conn) return cached.conn

  if (!MONGO_URI) throw new Error('MONGO_URI is missing')

  //   this is to connect to an already connection or create a new connection
  cached.promise =
    cached.promise ||
    mongoose.connect(MONGO_URI, {
      dbName: 'EventPlanner',
      bufferCommands: false,
    })

  cached.conn = await cached.promise

  return cached.conn
}
