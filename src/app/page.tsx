import env from "@/lib/env";

export default function Home() {
  return <main>
    <h1>Welcome to the Home Page</h1>
    <p>This is a simple Next.js application.</p>
    <p>Make sure to set up your environment variables correctly.</p>
    <p>The app is running on: {env.BASE_URL}</p>
  </main>;
}
