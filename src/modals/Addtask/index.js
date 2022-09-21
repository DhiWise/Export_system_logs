import React from "react";
import ModalProvider from "react-modal";

import { postTask } from "service/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useForm from "hooks/useForm";
import { Column, Text, Input, Row, Button } from "components";

const AddtaskModal = (props) => {
  const [apiData, setapiData] = React.useState();
  const form = useForm({ type: "" });

  function callApi(data) {
    const req = { data: {  
    type: "task",
    name: data.type,
    status: "to do",
    content: { ops: [{ insert: props.task.title }] },
    project: { id: "3393306", name: "demospace" },
    categoryId: "3471568",
    subcategoryId: "7593108",
    subcategory_id: "7593108",
   } };
    console.log("data",data.type,req)
    postTask(req)
      .then((res) => {
        setapiData(res);

        toast.success("Task successfully added");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Task not added");
      }).finally(()=> props.onRequestClose());
  }

  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] w-[37%]"
        overlayClassName="bg-black_900_7f fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="m-[auto] max-h-[97vh] overflow-y-auto">
          <Column className="bg-white_A700 lg:p-[15px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius10 w-[100%]">
            <Text className="font-semibold lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_700 w-[auto]">
              Add Task to Clickup
            </Text>
            <Input
              className="font-normal not-italic p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_500 text-bluegray_500 w-[100%]"
              wrapClassName="2xl:ml-[6px] 2xl:mt-[27px] 3xl:ml-[7px] 3xl:mt-[32px] lg:ml-[4px] lg:mt-[21px] w-[98%] xl:ml-[5px] xl:mt-[24px]"
              onChange={(e) => {
                form.handleChange("type", e.target.value);
              }}
              value={form?.values?.type}
              name="Group10571"
              placeholder="Task title"
              shape="RoundedBorder4"
              size="sm"
              variant="OutlineGray400"
            ></Input>
            <Text className="font-semibold lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_700 w-[auto]">
              Description
            </Text>
            <Text className="font-normal leading-[normal] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_700_99 w-[98%]">
            {props.task.title}
            </Text>
            <Row className="items-center justify-end ml-[auto] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[33%]">
              <Button
                className="common-pointer font-normal not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[43%]"
                onClick={props.onRequestClose}
                shape="RoundedBorder4"
                size="md"
                variant="FillGray201"
              >
                Cancel
              </Button>
              <Button
                className="common-pointer font-normal 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[51%]"
                onClick={() => {
                  form.handleSubmit(callApi);
                }}
                shape="RoundedBorder4"
                size="md"
              >
                Add Now
              </Button>
            </Row>
          </Column>
        </div>
      </ModalProvider>
      <ToastContainer />
    </>
  );
};

export default AddtaskModal;
