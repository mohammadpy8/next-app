import { FormDataItem } from "@/components/custom";

const dataFormStepper = [
  [
    {
      page: 1,
      label: "نام",
      valid: true,
      type: "SWITCH",
      customSx: null,
      placeholder: "نام",
      dataForm: null,
    },
    {
      page: 1,
      label: "سن",
      valid: true,
      type: "INPUT",
      customSx: null,
      placeholder: "سن",
      dataForm: null,
    },
  ],
  [
    {
      page: 2,
      label: "شغل",
      valid: true,
      type: "RADIOBUTTON",
      customSx: null,
      placeholder: "شغل",
      dataForm: null,
    },
    {
      page: 2,
      label: "نام",
      valid: true,
      type: "SWITCH",
      customSx: null,
      placeholder: "نام",
      dataForm: null,
    },
  ],
];

const formData : FormDataItem[] = [
  {
    label: "نام و نام خانوادگی",
    valid: true,
    type: "INPUT",
    customSx: null,
    placeholder: "نام و نام خانوادگی",
    dataForm: null,
  },
  {
    label: "نام و نام خانوادگی",
    valid: true,
    type: "COMBOBOX",
    customSx: null,
    placeholder: "نام و نام خانوادگی",
    dataForm: null,
  },
  {
    label: "نام و نام خانوادگی",
    valid: true,
    type: "SWITCH",
    customSx: null,
    placeholder: "نام و نام خانوادگی",
    dataForm: null,
  },
];

export { dataFormStepper, formData };
