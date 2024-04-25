"use client";
import { TransactionType } from "@/interfaces/Transaction";
import { useTransactions } from "@/utils/transactions";
import { arrowdown, deposit, download, withdrawal } from "../icons";
import { formatDate } from "@/utils";
import React from "react";
import ModalPreview from "../modal-preview";
import Filter from "./filters";

function TransactionsList() {
  const [filter, setFilter] = React.useState({});
  const { data, isPending, isError } = useTransactions();
  const [showFiter, setShowFilter] = React.useState(false);
  if (isPending || !data) {
    return "";
  }

  return (
    <>
      <section>
        <div className="flex justify-between border-b border-gray-50 mb-8">
          <div className="pb-6 ">
            <div className="text-black-300 text-base mb-2 font-bold">{data.length} Transactions</div>
            <div className="text-gray-400 text-sm leading-4 font-medium">
              Your transactions for the last 7 days
            </div>
          </div>
          <div className="flex gap-3 ">
            <div
              onClick={() => setShowFilter(true)}
              className="bg-gray-50 rounded-full h-12 flex justify-between items-center cursor-pointer text-base text-black-300"
              style={{
                paddingLeft: "1.875rem",
                paddingRight: "1.25rem",
                gap: "0.625rem",
              }}
            >
              <span>Filter</span>
              {arrowdown}
            </div>
            <div
              className="bg-gray-50 rounded-full h-12 flex justify-between items-center cursor-pointer text-base text-black-300"
              style={{
                paddingLeft: "1.875rem",
                paddingRight: "1.25rem",
                gap: "0.625rem",
              }}
            >
              <span>Export list</span>
              {download}
            </div>
          </div>
        </div>
        <div>
          {data.map((i) => (
            <div className="mb-6 flex justify-between">
              <div
                className="flex"
                style={{
                  gap: "0.875rem",
                }}
              >
                {i.type === TransactionType.WITHDRAWAL ? withdrawal : deposit}
                <div>
                  {i.type === TransactionType.WITHDRAWAL ? (
                    <div>
                      <div className="text-black-300 text-base mb-2 font-medium">Cash withdrawal</div>
                      <div className="text-gray-400 text-sm leading-4 font-medium capitalize">{i.status}</div>
                    </div>
                  ) : (
                    <div>
                      <div className="text-black-300 text-base mb-2 font-medium">
                        {i.metadata.product_name || "Deposit"}
                      </div>
                      <div className="text-gray-400 text-sm leading-4 font-medium">{i.metadata.name}</div>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex flex-col items-end">
                <div className="text-black-300 text-base mb-2 font-bold">USD {i.amount}</div>
                <div className="text-gray-400 text-sm leading-4 font-medium">{formatDate(i.date)}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <ModalPreview isOpen={showFiter} onClose={() => setShowFilter(false)}>
        <Filter filter={filter} setFilter={setFilter} />
      </ModalPreview>
    </>
  );
}

export default TransactionsList;
