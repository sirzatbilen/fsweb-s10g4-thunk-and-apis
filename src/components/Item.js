import React from "react";

export default function Item({ data }) {
  console.log(data);
  return (
    // https://kopi.dev/tailwind/tags-input/
    // https://flowbite.com/docs/components/progress/
    <div className="shadow-md bg-white text-left px-8 py-12">
      <p className="text-4xl font-bold  ">:sunglasses:{data.activity}</p>
      <div className="flex gap-x-6 bg-slate-200 px-4 py-4 my-4 rounded-l ">
        <span className="text-sm text-white px-6 py-2 bg-emerald-700 rounded-xl">
          {data.type}
        </span>
        <span className="text-sm text-white px-6 py-2 bg-stone-700 rounded-xl">
          {data.participants} participant(s)
        </span>
        <span className="text-sm text-white px-6 py-2 bg-lime-700 rounded-xl">
          {data.price}
        </span>
      </div>
      <p className="text-base mt-6 mb-2">:star:Accesibility Score</p>
      <div className="">
        <div className="w-full bg-gray-200 rounded-full"></div>
        <div
          className="text-xs text-center text-opacity-70 text-white font-bold bg-green-600 rounded-full"
          style={{ width: data.accessibility * 100 + "%" }}
        >
          :fire:{data.accessibility}
        </div>
      </div>
      {data.link && (
        <a href={data.link} className="text-2xl p-10" target="_blank">
          link: {data.link}
        </a>
      )}
    </div>
  );
}
