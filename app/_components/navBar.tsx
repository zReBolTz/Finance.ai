"use client";

import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathName = usePathname();

  return (
    <div className="flex justify-between border-b border-solid px-8 py-4">
      <div className="flex items-center gap-10">
        <Image
          src="/iconFinaceAi.svg"
          width={173}
          height={39}
          alt="Finace Ai"
        />
        <Link
          href="/"
          className={
            pathName === "/"
              ? "text-bold text-primary"
              : "text-muted-foreground"
          }
        >
          Dashboard
        </Link>
        <Link
          href="/transactions"
          className={
            pathName === "/transactions"
              ? "text-bold text-primary"
              : "text-muted-foreground"
          }
        >
          Transações
        </Link>
        <Link
          href="/subscriptions"
          className={
            pathName == "/subscriptions"
              ? "text-bold text-primary"
              : "text-muted-foreground"
          }
        >
          Assinaturas
        </Link>
      </div>
      <div>
        <UserButton showName />
      </div>
    </div>
  );
};

export default NavBar;
