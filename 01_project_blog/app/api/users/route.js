import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req) {
  const url = req.url;

  const { email, password } = await req.json();
  if (!email || !password) {
    return NextResponse.json(
      { message: "Email and Password are Required !" },
      { status: 400 }
    );
  }

  try {
    if (url.includes("/register")) {
      const existingUsers = await axios.get("https://localhost:3001/users", {
        params: { email },
      });

      if (existingUsers.data.length > 0) {
        return NextResponse.json(
          { message: "User Already Exists" },
          { status: 400 }
        );
      }

      const response = await axios.post("http://localhost:3001/users", {
        email,
        password,
        createdAt: new Date().toISOString(),
      });

      return NextResponse.json(
        { message: "User Registered Successfully", user: response.data },
        { status: 200 }
      );
    } else if (url.includes("/login")) {
      const users = await axios.get("http://localhost:3001/users", {
        params: { email },
      });

      const user = users.data[0];
      if (!user) {
        return NextResponse.json(
          { message: "User Not Found" },
          { status: 400 }
        );
      }

      if (user.password !== password) {
        return NextResponse.json(
          { message: "Invalid Password" },
          { status: 400 }
        );
      }

      return NextResponse.json(
        { message: "Login Successful", user: { email: user.email } },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { message: "Endpoint Not Supported" },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error("Error: ", error);
    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  }
}
