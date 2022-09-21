
import React from "react";
import { get } from "service/api";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import { ExportJsonCsv } from 'react-export-json-csv';
import {
  Column,
  Row,
  Text,
  Input,
  Img,
  Button,
  Line,
  SelectBox,
  Stack,
  List,
  CheckBox
} from "components";
import { CloseSVG } from "../../assets/images/index.js";
import AddtaskModal from "modals/Addtask";

const _ = require('lodash');

const ProducteventpagePage = () => {
  const [apiData, setapiData] = React.useState();
  const [checkInfo, setcheckInfo] = React.useState([]);
  const [inputvalue, setInputvalue] = React.useState("");
  const [editTaskId, setEditTaskId] = React.useState();
  const navigate = useNavigate();
  const editTask = React.useMemo(() => {
    return apiData?.find?.(data => data?.id === editTaskId)
  }, [apiData, editTaskId]);

  React.useEffect(() => {
    callApi();
  }, []);
  const newData = apiData?.map((x) => x)
  function handleNavigate1() {
    navigate("/productissuepage");
  }
  const headers = [
    {
      key: 'title',
      name: 'Title',
    },
    {
      key: ["event.type"],
      name: 'Event Type',
    },
    {
      key: 'projectID',
      name: 'Project Id',
    },
    {
      key: 'eventID',
      name: 'Event ID',
    },
    {
      key: 'location',
      name: 'Location',
    },
    {
      key: 'groupID',
      name: 'Group ID',
    },
    {
      key: 'culprit',
      name: 'Culprit',
    },
    {
      key: 'dateCreated',
      name: 'Created At',
    },
    {
      key: 'platform',
      name: 'Project platform',
    },
  ]
  var data
  if (checkInfo.length) {
   
    let checkData = _.map(checkInfo, (val) => {
     
      val = val
      var checkedData = _.map(apiData, (cdata) => {
        if (val.id == cdata.id) {
          return cdata;
        }
      })
      return _.without(checkedData, undefined, null, "", "crap")[0];

    })

  
    const newCheckedData = checkData?.map((x) => x)
    data = newCheckedData?.map((x) => (
      {
        title: x?.title,
        ["event.type"]: x?.["event.type"],
        projectID: x?.projectID,
        eventID: x?.eventID,
        location: x?.location,
        groupID: x?.groupID,
        culprit: x?.culprit,
        dateCreated: x?.dateCreated,
        platform: x?.platform
      }
    ))


  } else {
    data = newData?.map((x) => (
      {
        title: x?.title,
        ["event.type"]: x?.["event.type"],
        projectID: x?.projectID,
        eventID: x?.eventID,
        location: x?.location,
        groupID: x?.groupID,
        culprit: x?.culprit,
        dateCreated: x?.dateCreated,
        platform: x?.platform
      }
    ))
  }
  function callApi() {
    const req = {};
    get(req)
      .then((res) => {
        setapiData(res);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Something went wrong...");
      });
  }


  return (
    <>
      <Column className="bg-gray_50 font-gilroy items-center mx-[auto] lg:pb-[17px] xl:pb-[20px] pb-[23px] 3xl:pb-[27px] w-[100%]">
        <header className="w-[100%]">
          <Row className="bg-white_A700 border border-gray_300 border-solid items-center justify-end lg:p-[11px] xl:p-[13px] p-[15px] 3xl:p-[18px] w-[100%]">
            <Text className="cursor-pointer font-segoeui hover:font-semibold font-semibold lg:text-[22px] xl:text-[25px] text-[29px] 3xl:text-[34px] text-pink_400 w-[auto]">
              Sentry
            </Text>
            <Input
              value={inputvalue}
              onChange={(e) => setInputvalue(e?.target?.value)}
              className="bg-transparent border-0 font-normal font-sourcesanspro not-italic p-[0] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-bluegray_500 text-bluegray_500 w-[100%]"
              wrapClassName="3xl:ml-[432px] flex lg:ml-[280px] ml-[360px] my-[1px] w-[34%] xl:ml-[320px]"
              name="Group187"
              placeholder="Search.."
              prefix={
                <Img
                  src="images/img_search.png"
                  className="cursor-pointer w-[20.01px] ml-[9px] mr-[10px] lg:w-[15px] lg:mx-[7px] xl:w-[17px] xl:mx-[8px] 2xl:w-[20px] 3xl:w-[24px] 3xl:ml-[10px] 3xl:mr-[12px] my-[auto]"
                  alt="search"
                />
              }
              suffix={
                inputvalue?.length > 0 ? (
                  <CloseSVG
                    color="#73828c"
                    className="cursor-pointer w-[20.01px] ml-[10px] mr-[22px] lg:w-[15px] lg:ml-[7px] lg:mr-[17px] xl:w-[17px] xl:ml-[8px] xl:mr-[19px] 2xl:w-[20px] 3xl:w-[24px] 3xl:ml-[12px] 3xl:mr-[26px] my-[auto]"
                    onClick={() => setInputvalue("")}
                  />
                ) : (
                  ""
                )
              }
            ></Input>
            <Img
              src="images/img_question.png"
              className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] lg:ml-[244px] xl:ml-[279px] 2xl:ml-[314px] 3xl:ml-[377px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
              alt="question"
            />
            <Img
              src="images/img_notification.png"
              className="lg:h-[15px] xl:h-[17px] 2xl:h-[20px] 3xl:h-[23px] lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] w-[1%]"
              alt="notification"
            />
            <Button
              className="flex lg:h-[32px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-center lg:ml-[21px] xl:ml-[24px] 2xl:ml-[28px] 3xl:ml-[33px] lg:mr-[10px] xl:mr-[12px] 2xl:mr-[14px] 3xl:mr-[16px] mt-[1px] lg:w-[31px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
              shape="icbCircleBorder20"
              size="smIcn"
              variant="icbFillPink600"
            >
              <Img
                src="images/img_refresh.png"
                className="flex items-center justify-center"
                alt="refresh"
              />
            </Button>
          </Row>
        </header>
        <Row className="lg:mt-[24px] xl:mt-[27px] mt-[31px] 3xl:mt-[37px] w-[35%]">
          <Text className="font-actor font-normal mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] lg:ml-[31px] xl:ml-[35px] ml-[40px] 3xl:ml-[48px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_401 w-[auto]" onClick={handleNavigate1}>
            Project Issues
          </Text>
          <Column className="font-actor lg:ml-[63px] xl:ml-[72px] ml-[81px] 3xl:ml-[97px] w-[20%]">
            <Text className="font-normal ml-[1px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-pink_600 w-[auto]">
              Project Events
            </Text>
            <Line className="bg-pink_600 h-[2px] lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[100%]" />
          </Column>


        </Row>
        <Column className="font-sourcesanspro items-center mt-[1px] w-[90%]">
          <Line className="bg-gray_301 h-[1px] w-[1px]" />
          <Column className="bg-white_A700 font-inter items-center lg:mt-[20px] xl:mt-[23px] mt-[26px] 3xl:mt-[31px] lg:py-[18px] xl:py-[21px] py-[24px] 3xl:py-[28px] rounded-radius16 shadow-bs w-[100%]">
            <Row className="items-center w-[97%]">
              <Text className="font-segoeui font-semibold lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_900 w-[auto]">
                Product Event List
              </Text>
              <Button
                className="3xl:ml-[28px] flex items-center justify-center lg:ml-[18px] ml-[24px] text-center w-[8%] xl:ml-[900px]"
                leftIcon={
                  <Img
                    src="images/img_upload.png"
                    className="w-[16px] h-[16px] mr-[10px] text-center lg:w-[12px] lg:h-[13px] lg:mr-[7px] xl:w-[14px] xl:h-[15px] xl:mr-[8px] 2xl:h-[17px] 3xl:w-[19px] 3xl:h-[20px] 3xl:mr-[12px]"
                    alt="upload"
                  />
                }
                shape="RoundedBorder4"
                size="sm"
                variant="FillPink601"
              >
                <div className="bg-transparent font-normal font-sourcesanspro not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px]">
                  <ExportJsonCsv headers={headers} items={data}>Export</ExportJsonCsv>
                </div>
              </Button>
            </Row>
            <Column className="items-center lg:mb-[31px] xl:mb-[35px] mb-[40px] 3xl:mb-[48px] lg:mt-[28px] xl:mt-[32px] mt-[37px] 3xl:mt-[44px] w-[100%]">

      
              <Row className="items-center my-[0] w-[100%] ">
                <Stack className="bg-pink_50 border-bw05 border-gray_200 border-solid lg:h-[35px] xl:h-[40px] h-[44px] 2xl:h-[45px] 3xl:h-[53px] px-[11px] 3xl:px-[13px] lg:px-[8px] xl:px-[9px] w-[6%] max-w-[100px] h-[100%] justify-center items-center ">
                  <CheckBox
                    className="bottom-[0] right-[26%] "
                    inputClassName="mr-[5px] w-[undefinedpx]"
                    name="square"
                    label=""

                    style={{ margin: "11px" }}
                  ></CheckBox>
                </Stack>
                <Text className="bg-pink_50 border-bw05 border-gray_200 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_900 tracking-ls1 w-[100px]">
                 Event
                </Text>
                <Text className="bg-pink_50 border-bw05 border-gray_200 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_900 tracking-ls1 w-[180px]">
                  Title
                </Text>
                <Text className="bg-pink_50 border-bw05 border-gray_200 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_900 tracking-ls1 w-[150px]">
                  Culprit
                </Text>
                <Text className="bg-pink_50 border-bw05 border-gray_200 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_900 tracking-ls1 w-[150px]">
                  Location
                </Text>
                <Text className="bg-pink_50 border-bw05 border-gray_200 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_900 tracking-ls1 w-[16%]" >
                  Event Id
                </Text>
                <Text className="bg-pink_50 border-bw05 border-gray_200 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_900 tracking-ls1 w-[180px] h-[100%] d-flex justify-start items-center">
                  Created Date
                </Text>
                <Column className="bg-pink_50 border-bw05 border-gray_200 border-solid font-sourcesanspro items-center lg:p-[4px] xl:p-[5px] p-[6px] 3xl:p-[7px] w-[13%] h-[100%] d-flex items-center justify-center" >
                  <Button
                    className="bg-pink_50 text-black flex items-center justify-center text-center w-[80%]"


                    shape="RoundedBorder4"
                  >
                    <div className="common-pointer bg-transparent font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px]">
                      Add to clickup
                    </div>
                  </Button>
                </Column>

              </Row>
              <List
                className="bg-white_A700 border-bw05 border-gray_200 border-solid gap-[0] min-h-[auto] w-[100%]"
                orientation="vertical"
              >
                {apiData?.map((apiDataResponseEle) => {
                  return (
                    <Row className="items-center my-[0] w-[100%]">
                      <Stack className="bg-white_A700 border-bw05 border-gray_200 border-solid  px-[11px] 3xl:px-[13px] lg:px-[8px] xl:px-[9px] w-[6%] h-[100%] m-width-[100px] justify-center items-center" >
                        <CheckBox
                          className="bottom-[0] right-[26%] "
                          inputClassName="mr-[5px] w-[undefinedpx]"
                          name="square"
                          label=""
                          onChange={(e) => {
                            // add to list
                            if (e.target.checked) {

                              setcheckInfo([
                                {
                                  id: apiDataResponseEle?.id,
                                },
                                ...checkInfo,
                              ]);

                            } else {
                              // remove from list
                              setcheckInfo(
                                checkInfo.filter(
                                  (data) => data.id !== apiDataResponseEle.id
                                )
                              );
                            }
                          }}
                          value={checkInfo}
                          style={{ margin: "20px" }}
                        ></CheckBox>
                      </Stack>

                      {/* {console.log(checkInfo)} */}

                      <Text className="bg-white_A700 border-bw05 border-gray_200 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_900 tracking-ls1 w-[16%] h-[100%] justify-start items-center max-w-[100px]" >
                        {apiDataResponseEle?.["event.type"]}

                      </Text>
                      <Text className="bg-white_A700 border-bw05 border-gray_200 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_900 tracking-ls1 w-[16%] h-[100%] justify-start items-center max-w-[250px]" >
                        {apiDataResponseEle?.title}
                      </Text>
                      <Text className="bg-white_A700 border-bw05 border-gray_200 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_900 tracking-ls1 w-[16%] h-[100%] justify-start items-center max-w-[150px]" >
                        {apiDataResponseEle?.culprit}
                      </Text>
                      <Text className="bg-white_A700 border-bw05 border-gray_200 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_900 tracking-ls1 w-[16%] h-[100%] justify-start items-center max-w-[150px]" >
                        {apiDataResponseEle?.location}
                      </Text>
                      <Text className="bg-white_A700 border-bw05 border-gray_200 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_900 tracking-ls1 w-[16%] h-[100%] justify-start items-center max-w-[250px]" >
                        {apiDataResponseEle?.eventID}
                      </Text>
                      <Text className="bg-white_A700 border-bw05 border-gray_200 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_900 tracking-ls1 w-[16%] h-[100%] justify-start items-center max-w-[200px]" >
                        {apiDataResponseEle?.dateCreated}
                      </Text>
                      <Column className="bg-white_A700 border-bw05 border-gray_200 border-solid font-sourcesanspro items-center lg:p-[4px] xl:p-[5px] p-[6px] 3xl:p-[7px] w-[13%] h-[100%] d-flex justify-center items-center" >
                        <Button
                          className="flex items-center justify-center text-center w-[80%]"
                          onClick={() => setEditTaskId(apiDataResponseEle.id)}
                          leftIcon={
                            <Img
                              src="images/img_plus.png"
                              className="w-[16px] h-[16px] mr-[10px] text-center lg:w-[12px] lg:h-[13px] lg:mr-[7px] xl:w-[14px] xl:h-[15px] xl:mr-[8px] 2xl:h-[17px] 3xl:w-[19px] 3xl:h-[20px] 3xl:mr-[12px]"
                              alt="plus"
                            />
                          }
                          shape="RoundedBorder4"
                        >
                          <div className="common-pointer bg-transparent font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px]">
                            Add to clickup
                          </div>
                        </Button>
                      </Column>
                    </Row>
                  );
                })}
              </List>
            </Column>
          </Column>
          <Text className="font-normal lg:mt-[245px] xl:mt-[280px] mt-[315px] 3xl:mt-[378px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900_b2 tracking-ls1 w-[auto]">
            "Made with ❤️ using DhiWise"
          </Text>
        </Column>
      </Column>
      <ToastContainer />
      {editTask ? (
        <AddtaskModal
          isOpen={editTask?.id}
          task={editTask}
          onRequestClose={() => setEditTaskId(undefined)}
        />
      ) : null}
    </>
  );
};

export default ProducteventpagePage;
