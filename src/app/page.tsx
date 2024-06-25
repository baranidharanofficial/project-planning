import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Login() {



  return (
    <div className="flex flex-col items-center justify-center w-full h-[100vh] bg-gradient-to-r from-blue-50 to-green-50">
      <div className="shadow-xl p-8 w-[350px] bg-white rounded-lg flex flex-col items-start justify-center">
        <h1 className="mb-2 text-xl font-semibold">Sign in to BuildSuite</h1>
        <p className="mb-8 text-sm">Don't have an account? Get started</p>

        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" className=" mb-3" placeholder="Email or Username" />
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="password">Password</Label>
          <Input type="password" id="password" className=" mb-8" placeholder="Password" />
        </div>
        
        
        <Button className="w-full border-2 bg-green-600 hover:bg-green-600 hover:p-1 hover:border-green-600">Login</Button>
      </div>
    </div>
  );
}
