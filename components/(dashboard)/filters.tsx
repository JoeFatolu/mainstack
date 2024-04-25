import React from "react";
import DatePicker from "react-datepicker";
import Dropdown from "../dropdown";
import classNames from "classnames";
import { sub, startOfDay, endOfDay, startOfMonth, isSameDay } from "date-fns";
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
  { label: "Today", value: "", key: 0, startDate: startOfDay(new Date()), endDate: endOfDay(new Date()) },
  {
    label: "Last 7 days",
    value: "",
    key: 1,
    startDate: startOfDay(sub(new Date(), { days: 7 })),
    endDate: endOfDay(new Date()),
  },
  {
    label: "This month",
    value: "",
    key: 2,
    startDate: startOfMonth(new Date()),
    endDate: endOfDay(new Date()),
  },
];

function Filter({ filter, setFilter, onClose }: any) {
  const [type, setType] = React.useState(filter.type || []);
  const [status, setStatus] = React.useState(filter.status || []);
  const [date, setDate] = React.useState({
    startDate: filter?.date?.startDate || new Date(),
    endDate: filter?.date?.endDate || new Date(),
  });

  return (
    <div
      className="p-6 bg-white flex flex-col justify-between h-full"
      style={{
        width: "28.5rem",
        borderRadius: "20px",
      }}
    >
      <div>
        <div className={classNames("text-black-300 text-2xl  font-bold leading-7 mb-8 cursor-pointer")}>
          Filter
        </div>
        <div className="flex gap-3 items-center">
          {dateRanges.map((i) => (
            <div
              className={classNames(
                "text-sm leading-4 font-semibold  border border-gray-50 rounded-full px-4 h-9 align-middle flex items-center cursor-pointer",
                {
                  "bg-black-300 text-white":
                    isSameDay(date.startDate, i.startDate) && isSameDay(date.endDate, i.endDate),
                }
              )}
              onClick={() => {
                setDate({ startDate: i.startDate, endDate: i.endDate });
              }}
            >
              {i.label}
            </div>
          ))}
        </div>

        <div className="my-6">
          <div className={"text-black-300 text-base  font-semibold  mb-2 "}>Date Range</div>
          <div>
            <div className="flex justify-between relative">
              <DatePicker
                selected={date.startDate}
                onChange={(dateSelected) => setDate({ ...date, startDate: dateSelected })}
                dateFormatCalendar={"MMMM yyyy"}
              />
              <DatePicker
                selected={date.endDate}
                onChange={(dateSelected) => setDate({ ...date, endDate: dateSelected })}
                dateFormatCalendar={"MMMM yyyy"}
              />
            </div>
          </div>
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
            onClose();
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
            const tempFilter = {} as any;
            if (type && type.length) tempFilter.type = type;
            if (status && status.length) tempFilter.status = status;
            if (date) tempFilter.date = date;

            setFilter({
              ...tempFilter,
            });
            onClose();
          }}
        >
          Apply
        </button>
      </div>
    </div>
  );
}

export default Filter;
