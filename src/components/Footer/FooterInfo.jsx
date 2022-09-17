import React from "react";
import {
  CUSTOMER_CARE,
  FOLLOW_US,
  PAYMENT,
  PRIVACY,
} from "../../dummy_database/FooterDummyDatabase";

export const FooterInfo = (props) => {
  return (
    <ul>
      <h1 className="mb-1 font-semibold">{props.title}</h1>
      {props.data.map((item) => (
        <li key={item.name}>
          <a
            className="text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6"
            href={item.route}
          >
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
};
export const InfoContainer = (props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-center gap-6 sm:px-8 py-16">
      <FooterInfo title={PRIVACY.title} data={PRIVACY.list}></FooterInfo>

      <FooterInfo
        title={CUSTOMER_CARE.title}
        data={CUSTOMER_CARE.list}
      ></FooterInfo>
      <FooterInfo title={PAYMENT.title} data={PAYMENT.list}></FooterInfo>
    </div>
  );
};
