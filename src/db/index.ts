import mongoose from "mongoose";

type ConnectionObject = {
	isConnected?: number;
};

const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
	if (connection.isConnected) {
		console.log("Already connected to the database");
		return;
	}

	if (!process.env.MONGODB_URI) {
		console.error("MongoDB URI is not defined in environment variables.");
		process.exit(1);
	}

	try {
		const db = await mongoose.connect(process.env.MONGODB_URI, {});
		connection.isConnected = db.connection.readyState; // Fixed reference

		console.log("Database connected successfully");
	} catch (error) {
		console.error("Database connection failed:", error);
		process.exit(1);
	}
}

export default dbConnect;
