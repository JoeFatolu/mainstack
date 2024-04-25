import { Metadata } from "next";
import { info } from "@/components/icons";
import { getWallet } from "@/api/wallet";
import { formatNumber } from "@/utils";
import TransactionsList from "@/components/(dashboard)/transactions";
import ModalPreview from "@/components/modal-preview";
import Chart from "@/components/(dashboard)/chart";

const metrics = [
  {
    label: "Ledger Balance",
    valueKey: "ledger_balance",
  },
  {
    label: "Total Payout",
    valueKey: "total_payout",
  },
  {
    label: "Total Revenue",
    valueKey: "total_revenue",
  },
  {
    label: "Pending Payout",
    valueKey: "pending_payout",
  },
];

export default async function Revenue() {
  const wallet = await getWallet();

  return (
    <>
      <section className="flex justify-between">
        <div>
          <div className="flex gap-16">
            <div>
              <div className="text-sm leading-4 text-gray-400 mb-2 font-medium">Available Balance</div>
              <div
                className="font-bold text text-black-300"
                style={{
                  fontSize: "1.75rem",
                }}
              >
                USD {formatNumber(wallet.balance)}
              </div>
            </div>
            <button
              className="bg-black-300 rounded-full text-white font-semibold text-base"
              style={{
                height: "3.25rem",
                width: "10.4375rem",
              }}
            >
              Withdraw
            </button>
          </div>
          <Chart />
        </div>
        <div>
          {metrics.map((i) => (
            <div
              className="flex justify-between mb-8"
              style={{
                width: "16.9375rem",
              }}
            >
              <div>
                <div className="text-sm leading-4 text-gray-400 mb-2 font-medium">{i.label}</div>
                <div
                  className="font-bold text text-black-300"
                  style={{
                    fontSize: "1.75rem",
                  }}
                >
                  USD {formatNumber(wallet[i.valueKey])}
                </div>
              </div>
              {info}
            </div>
          ))}
        </div>
      </section>
      <TransactionsList />
    </>
  );
}

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Dashboard",
};
