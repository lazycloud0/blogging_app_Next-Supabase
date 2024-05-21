import AuthButton from "../components/AuthButton";
import { createClient } from "@/utils/supabase/server";


export default async function Index() {


  return (
    <div className="flex flex-col gap-20 items-center">
      {/* Just a example, but you should find a better place to put this btn */}
      <AuthButton/>
      <h1>Hello World</h1>
      <h2>Scroll down to see the footer</h2>
      <p>step1</p>
      <p>Go to your supabase Authentication </p>
      <p>Providers then on email, just enable the first option and save.</p>
      <p>step2</p>
      <p>Make sure to create the .env file and like to your db: </p>
      <p>ex: NEXT_PUBLIC_SUPABASE_URL=https://ynntyetyphkdqgbf.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=zdXBhYmFzZSIsInJlZiI6InlubnR5ZXRwZXZ3eXBoa2RxZ2JmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ1ODA0MTgsImV4cCI6MjAzMDE1NjQxOH0.ymWYX8liJMVpywxyb4PAWArTdParX8gHrNjqmdVR10U</p>
      <p>SignUp and then Sign In :) , Once you sign In you will get redirected by default to a protected page that onlys shows when the person is logged in!</p>
    </div>
  );
}
