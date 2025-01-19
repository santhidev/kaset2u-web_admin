import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableOne from "@/components/Tables/TableOne";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
     title: "Next.js Accounts | TailAdmin - Next.js Dashboard Template",
     description:
          "This is Next.js Tables page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const AccountsPage = () => {
     return (
          <DefaultLayout>
               <Breadcrumb pageName="Accounts" />

               <div className="flex flex-col gap-10">
                    <TableOne />
               </div>
          </DefaultLayout>
     );
};

export default AccountsPage;
