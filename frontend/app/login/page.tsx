import { Button } from "@/components/ui/button"

const LoginPage: React.FC = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-50">
      <div className="w-96 bg-white p-6 shadow rounded">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="mt-1 block w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              placeholder="Your password"
              className="mt-1 block w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <Button className="w-full mt-4">Login</Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
