import { auth, clerkClient } from "@clerk/nextjs/server";
import NavBar from "../_components/navBar";
import { redirect } from "next/navigation";
import { Card, CardContent, CardHeader } from "../_components/ui/card";
import { CheckIcon, XIcon } from "lucide-react";
import AcquirePlanButton from "./__components/acquire-plan-button";
import { Badge } from "../_components/ui/badge";

const SubscriptionsPage = async () => {
  const { userId } = await auth();
  if (!userId) {
    redirect("/login");
  }
  const user = await clerkClient().users.getUser(userId);
  const hasPremium = user?.publicMetadata.subscriptionPlan == "premium";
  return (
    <>
      <NavBar />
      <div className="space-y-6 p-6">
        <h1 className="text-2xl font-bold">Assinatura</h1>
      </div>
      <div className="flex gap-6">
        <Card className="w-[450px]">
          <CardHeader className="border-b border-solid py-8">
            <h2 className="text-center text-2xl font-semibold">Plano Básico</h2>
            <div className="flex items-center justify-center gap-3">
              <span className="text-4xl">R$</span>
              <span className="text-6xl font-semibold">0</span>
              <span className="text-2xl text-muted-foreground">/mês</span>
            </div>
          </CardHeader>
          <CardContent className="space-y-6 py-8">
            <div className="flex items-center gap-2">
              <CheckIcon className="text-primary" />
              <p> Apenas 10 transações por mês (7/10)</p>
            </div>
            <div className="flex items-center gap-2">
              <XIcon />
              <p> Relatórios de IA</p>
            </div>
          </CardContent>
        </Card>
        <Card className="w-[450px]">
          <CardHeader className="relative border-b border-solid py-8">
            {hasPremium && (
              <Badge className="absolute left-4 top-12 bg-primary/10 text-primary">
                Ativo
              </Badge>
            )}
            <h2 className="text-center text-2xl font-semibold">
              Plano Premium
            </h2>
            <div className="flex items-center justify-center gap-3">
              <span className="text-4xl">R$</span>
              <span className="text-6xl font-semibold">19</span>
              <span className="text-2xl text-muted-foreground">/mês</span>
            </div>
          </CardHeader>
          <CardContent className="space-y-6 py-8">
            <div className="flex items-center gap-2">
              <CheckIcon className="text-primary" />
              <p> Transações ilimitadas</p>
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon className="text-primary" />
              <p> Relatórios de IA</p>
            </div>
            <AcquirePlanButton />
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default SubscriptionsPage;
