"use client";

import { useState } from "react";
import CheckboxGroup from "@/components/CheckboxGroup";
import DynamicInputList from "@/components/DynamicInputList";
import EllipsisText from "@/components/EllipsisText";
import ExternalLinkComponent from "@/components/ExternalLinkComponent";
import IconText from "@/components/IconText";
import InputGroupComponent from "@/components/InputGroupComponent";
import ReusableCheckbox from "@/components/ReusableCheckbox";
import SidebarNav from "@/components/SidebarNav";
import SkeletonImage from "@/components/SkeletonImage";
import SkeletonLoading from "@/components/SkeletonLoading";
import { Button } from "@/components/ui/button";
import { Home, Info, Settings } from "lucide-react";
import { CheckCircle, AlertCircle } from "lucide-react";

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

  const menus = [
    {
      name: "home",
      path: "/",
      meta: { title: "Home", icon: Home },
    },
    {
      name: "about",
      path: "/about",
      meta: { title: "About", icon: Info },
    },
    {
      name: "services",
      meta: { title: "Services", icon: Settings },
      children: [
        {
          name: "web-development",
          path: "/services/web-development",
          meta: { title: "Web Development" },
        },
        {
          name: "mobile-development",
          path: "/services/mobile-development",
          meta: { title: "Mobile Development" },
        },
      ],
    },
  ];

  return (
    <div className="py-10 max-w-[30rem] mx-auto">
      <h1 className="text-xl text-[#01211a] md:text-3xl text-center mb-10 font-black">
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
      <h1 className="text-xl font-black my-4">Sidebar Nav</h1>
      <SidebarNav menus={menus} vertical />
      <h1 className="text-xl font-black my-4">Image Skeleton</h1>
      <SkeletonImage width={200} height={100} animation="pulse">
        <img src="/girlOnHeadPhone.jpg" alt="Girl " />
      </SkeletonImage>
      <h1 className="text-xl font-black my-4">Paragraph Skeleton</h1>
      <SkeletonLoading count={5} width="80%" />
      <h1 className="text-xl font-black my-8">Ellipsis Text </h1>
      <div style={{ width: "150px" }}>
        <EllipsisText text="This is a very long text that will be truncated" />
      </div>{" "}
      <h1 className="text-xl font-black my-4">External Link </h1>
      <ExternalLinkComponent url="https://example.com">
        Visit example
      </ExternalLinkComponent>
      <h1 className="text-xl font-black my-4">Text Icon </h1>
      <div>
        <IconText icon={CheckCircle} text="Task completed" />
        <IconText icon={AlertCircle} text="Error occurred" />
      </div>
    </div>
  );
};

export default page;
