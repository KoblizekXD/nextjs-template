
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

// This is a demonstration page for the auth sign-in/sign-up flow.

export default async function AuthPage() {
  const session = await auth.api.getSession({
    headers: await headers()
  });
  if (session) redirect("/");

  return (
    <div>
      <form className="flex flex-col">
        <h1>Sign In</h1>
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <div className="flex justify-between">
          <button type="submit" name="signin" value="signIn">Sign In</button>
          <button type="submit" name="signup" value="signUp">Sign Up</button>
        </div>
      </form>
    </div>
  )
}