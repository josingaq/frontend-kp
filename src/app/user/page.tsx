"use client";

import { GroupUser } from "@/components/dashboard/team/GroupUser";
import { Header } from "@/components/dashboard/general/Header";
import { TableUser } from "@/components/dashboard/team/TableUser";
import { Footer } from "@/components/dashboard/general/Footer";
export function UserHome() {
  return (
    <>
      <div className="divide-y divide-gray-200 overflow-hidden rounded-lg border-none bg-white">
        <div className="border-none px-4 py-5 sm:px-6">
          <Header/>
          <GroupUser />
        </div>
        <div className="border-none px-4 py-5 sm:p-6">
          <TableUser />
        </div>
        <div className="px-4 py-4 sm:px-6">
          <Footer/>
        </div>
      </div>
    </>
  );
}
