import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

const Index = () => {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold mb-4">Welcome, {user?.name}!</h1>
        <p className="text-xl text-muted-foreground">You are successfully logged in to your application.</p>
        <div className="space-y-2">
          <p className="text-muted-foreground">Logged in as: {user?.email}</p>
          <Button onClick={logout} variant="outline">
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
