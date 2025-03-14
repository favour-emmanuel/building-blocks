"use client";

import { useState } from "react";
import DynamicInputList from "@/components/DynamicInputList";
import InputGroupComponent from "@/components/InputGroupComponent";
import { Button } from "@/components/ui/button";
import ReusableCheckbox from "@/components/ReusableCheckbox";
import CheckboxGroup from "@/components/CheckboxGroup";

const page = () => {
  const [values, setValues] = useState<(string | number | null)[]>([]);
  const [emails, setEmails] = useState<(string | number | null)[]>([]);
  const [numbers, setNumbers] = useState<(string | number | null)[]>([]);

  const [isChecked, setIsChecked] = useState(false);

  const [selectedValues, setSelectedValues] = useState<any>([]);

  const options = [
    { value: "html", text: "HTML" },
    { value: "css", text: "CSS" },
    { value: "js", text: "JavaScript" },
  ];

  return (
    <div className="py-10 max-w-[30rem] mx-auto">
      <h1 className="text-xl text-[#109379] md:text-3xl text-center my-6 font-black">
        Reusable Components..
      </h1>

      <h1 className="text-2xl font-black my-4">Default Input</h1>

      <InputGroupComponent
        type="text"
        text="Enter your name:"
        placeHolder="Enter name.."
      />

      <InputGroupComponent
        type="password"
        text="Enter your name:"
        maskable={true}
        placeHolder="******"
      />

      <InputGroupComponent
        type="text"
        prepend="$"
        append=".com"
        text="Enter your email"
        placeHolder="youremail@gmail.com"
      />

      <InputGroupComponent
        type="text"
        appendComponent={<Button className="bg-[#FC6401]">Enter</Button>}
        text="Enter a code:"
      />

      <h1 className="text-2xl font-black my-4">Multi-field Input</h1>

      <DynamicInputList
        value={values}
        onChange={setValues}
        fieldAttrs={{ label: "Item", placeholder: "Enter an item" }}
        addButtonText="Add Item"
      />

      <DynamicInputList
        value={emails}
        onChange={setEmails}
        fieldAttrs={{
          type: "email",
          label: "Email",
          placeholder: "Enter an email",
        }}
        addButtonText="Add Email"
      />

      <DynamicInputList
        value={numbers}
        onChange={setNumbers}
        fieldAttrs={{
          type: "number",
          label: "Quantity",
          placeholder: "Enter a number",
        }}
        addButtonText="Add Number"
      />

      <h1 className="text-xl font-black my-4">CheckBox </h1>

      <ReusableCheckbox
        name="Enable Feature"
        value={isChecked}
        onChange={setIsChecked}
        switch
        size="lg"
      />
      <ReusableCheckbox
        name="Enable Feature"
        value={isChecked}
        onChange={setIsChecked}
        switch={false}
        size="lg"
      />
      <h1 className="text-xl font-black my-4">Check Box Group</h1>
      <CheckboxGroup
        options={options}
        value={selectedValues}
        onChange={setSelectedValues}
        name="example-checkbox-group"
      />
    </div>
  );
};

export default page;
