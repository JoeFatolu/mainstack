import React from "react";
import Dropdown from "../dropdown";
import classNames from "classnames";

const transactionsType = [
  {
    label: "Store Transactions",
    value: "store_transactions",
    key: 0,
  },
  {
    label: "Get Tipped",
    value: "get_tipped",
    key: 0,
  },
  {
    label: "Withdrawals",
    value: "withdrawals",
    key: 0,
  },
  {
    label: "Chargebacks",
    value: "chargebacks",
    key: 0,
  },
  {
    label: "Cashbacks",
    value: "cashbacks",
    key: 0,
  },
  {
    label: "Refer & Earn",
    value: "refer_and_win",
    key: 0,
  },
];

const transactionsStatus = [
  {
    label: "Successful",
    value: "success",
    key: 0,
  },
  {
    label: "Pending",
    value: "pending",
    key: 1,
  },
  {
    label: "Failed",
    value: "failed",
    key: 2,
  },
];

const dateRanges = [
  { label: "Today", value: "", key: 0 },
  { label: "Last 7 days", value: "", key: 1 },
  { label: "This month", value: "", key: 2 },
];

function Filter({ filter, setFilter }: any) {
  const [type, setType] = React.useState(filter.type || []);
  const [status, setStatus] = React.useState(filter.status || []);
  const [date, setDate] = React.useState();

  return (
    <div
      className="p-6 bg-white flex flex-col justify-between h-full"
      style={{
        width: "28.5rem",
        borderRadius: "20px",
      }}
    >
      <div>
        <div className="text-black-300 text-2xl  font-bold leading-7 mb-8 cursor-pointer">Filter</div>
        <div className="flex gap-3 items-center">
          {dateRanges.map((i) => (
            <div className="text-sm leading-4 font-semibold  border border-gray-50 rounded-full px-4 h-9 align-middle flex items-center cursor-pointer">
              {i.label}
            </div>
          ))}
        </div>
        <Dropdown
          label="Transaction Type"
          value={type}
          setValue={(e) => setType(e)}
          options={transactionsType}
        />
        <Dropdown
          label="Transaction Status"
          value={status}
          setValue={(e) => setStatus(e)}
          options={transactionsStatus}
        />
      </div>

      <div className="flex justify-between">
        <button
          className="border border-gray-50 rounded-full h-12 text-black-300 text-base  font-semibold "
          style={{ width: "12.375rem" }}
          onClick={() => {
            setType([]);
            setStatus([]);
            setFilter({});
          }}
        >
          Clear
        </button>
        <button
          className={classNames("bg-black-300 rounded-full h-12 text-base  font-semibold  text-white", {
            "opacity-20 cursor-not-allowed": !(type.length || status.length),
          })}
          style={{ width: "12.375rem" }}
          onClick={() => {
            setType([]);
            setStatus([]);
            setFilter({});
          }}
        >
          Apply
        </button>
      </div>
    </div>
  );
}

export default Filter;
