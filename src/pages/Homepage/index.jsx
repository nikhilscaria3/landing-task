import React from "react";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  RatingBar,
  Text,
  TextArea,
} from "components";

const HomepagePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-rubik items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="bg-gray-200 h-[1035px] md:px-5 relative w-full">
            <header className="flex flex-col items-center justify-center mb-[-78px] mx-auto w-full z-[1]">
              <div
                className="bg-cover bg-no-repeat flex flex-1 flex-col h-40 items-center justify-start p-[46px] md:px-10 sm:px-5 w-full"
                style={{ backgroundImage: "url('images/img_header.svg')" }}
              >
                <div className="flex flex-row md:gap-10 gap-[244px] items-center justify-start max-w-[1199px] w-full">
                  <div className="flex flex-col items-center justify-start w-[18%]">
                    <div className="flex flex-row gap-[9px] items-start justify-start w-full">
                      <div className="flex flex-col items-start justify-start mt-[3px] w-[14%]">
                        <div className="flex flex-row gap-[5px] items-start justify-evenly w-full">
                          <Img
                            className="h-[13px] w-[13px]"
                            src="images/img_thumbsup.svg"
                            alt="thumbsup"
                          />
                          <div className="bg-yellow-700_01 h-2.5 w-2.5"></div>
                        </div>
                        <div className="flex flex-row items-center justify-evenly ml-1 md:ml-[0] w-[86%] md:w-full">
                          <div className="bg-yellow-700_01 h-2.5 w-2.5"></div>
                          <div className="bg-yellow-700_01 h-2.5 w-2.5"></div>
                        </div>
                      </div>
                      <Text
                        className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                        size="txtRubikRomanSemiBold30"
                      >
                        TransitFlow
                      </Text>
                    </div>
                  </div>
                  <ul className="flex flex-1 md:flex-col flex-row font-krub gap-[39px] md:hidden items-center justify-end max-w-[745px] w-full common-row-list">
                    <li>
                      <a href="javascript:">
                        <div className="flex flex-row gap-[17px] items-center justify-start">
                          <Img
                            className="h-[63px] w-[63px]"
                            src="images/img_icon.svg"
                            alt="icon"
                          />
                          <Text
                            className="leading-[135.02%] text-sm text-white-A700"
                            size="txtKrubMedium14"
                          >
                            <>
                              Mon - Sat 9.00 - 18.00
                              <br />
                              Sunday Closed
                            </>
                          </Text>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:">
                        <div className="flex flex-row gap-3.5 items-center justify-center">
                          <Img
                            className="h-[63px] w-[63px]"
                            src="images/img_lock.svg"
                            alt="lock"
                          />
                          <a
                            href="mailto:contact@hvcargologistics.com"
                            className="font-medium leading-[135.02%] text-sm text-white-A700"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Text>
                              <>
                                Email
                                <br />
                                contact@logistics.com
                              </>
                            </Text>
                          </a>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:">
                        <div className="flex flex-row gap-3.5 items-start justify-start">
                          <Button
                            className="border border-indigo-900_01 border-solid flex h-[63px] items-center justify-center mb-[5px] w-[63px]"
                            color="indigo_900"
                            size="md"
                            variant="fill"
                          >
                            <Img src="images/img_call.svg" alt="call" />
                          </Button>
                          <Text
                            className="leading-[135.02%] mt-[11px] text-sm text-white-A700"
                            size="txtKrubMedium14"
                          >
                            <>
                              Call Us <br />
                              (00) 112 365 489
                            </>
                          </Text>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="bg-cover bg-no-repeat flex flex-1 flex-col font-krub h-[78px] items-center justify-start md:px-10 sm:px-5 px-[361px] w-full"
                style={{ backgroundImage: "url('images/img_menu.svg')" }}
              >
                <div className="flex md:flex-col flex-row sm:gap-1 md:gap-10 items-center justify-between max-w-[1197px] w-full">
                  <div className="flex md:flex-1 flex-col items-center justify-end pt-[30px] w-[43%] md:w-full">
                    <div className="flex flex-col gap-[23px] items-start justify-start w-full">
                      <ul className="flex flex-row gap-[30px] items-center justify-start w-[504px] sm:w-full">
                        <li>
                          <a
                            href="javascript:"
                            className="text-base text-white-A700"
                          >
                            <Text size="txtKrubSemiBold16WhiteA700">Home</Text>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:">
                            <div className="flex flex-row gap-[29px] items-start justify-center">
                              <Line className="bg-white-A700_33 h-[19px] w-px" />
                              <Text
                                className="text-base text-white-A700"
                                size="txtKrubSemiBold16WhiteA700"
                              >
                                About
                              </Text>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:">
                            <div className="flex flex-row gap-[29px] items-start justify-center">
                              <Line className="bg-white-A700_33 h-[19px] mb-0.5 w-px" />
                              <div className="flex flex-row items-center justify-evenly w-[67%]">
                                <Text
                                  className="text-base text-white-A700"
                                  size="txtKrubSemiBold16WhiteA700"
                                >
                                  Pages
                                </Text>
                                <Img
                                  className="h-1"
                                  src="images/img_vector.svg"
                                  alt="vector"
                                />
                              </div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:">
                            <div className="flex flex-row gap-[29px] items-start justify-center">
                              <Line className="bg-white-A700_33 h-[19px] w-px" />
                              <Text
                                className="text-base text-white-A700"
                                size="txtKrubSemiBold16WhiteA700"
                              >
                                Project
                              </Text>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:">
                            <div className="flex flex-row gap-[29px] items-center justify-start">
                              <Line className="bg-white-A700_33 h-[19px] w-px" />
                              <Text
                                className="text-base text-white-A700"
                                size="txtKrubSemiBold16WhiteA700"
                              >
                                Contact
                              </Text>
                            </div>
                          </a>
                        </li>
                      </ul>
                      <div className="bg-white-A700 h-0.5 w-[9%]"></div>
                    </div>
                  </div>
                  <div className="flex sm:flex-1 sm:flex-col flex-row gap-[50px] sm:gap-[9px] items-center justify-end w-[416px] sm:w-full">
                    <Img
                      className="h-[19px] w-[151px]"
                      src="images/img_follow.svg"
                      alt="follow"
                    />
                    <Button
                      className="cursor-pointer font-semibold min-w-[216px] text-base text-center"
                      shape="square"
                      color="white_A700"
                      size="lg"
                      variant="fill"
                    >
                      Request Quote
                    </Button>
                  </div>
                </div>
              </div>
            </header>
            <div className="h-[875px] mt-auto mx-auto w-full">
              <Img
                className="h-[875px] m-auto object-cover w-full"
                src="images/img_photo.png"
                alt="photo"
              />
              <div className="absolute flex flex-col gap-2 h-max inset-y-[0] items-start justify-start left-[19%] max-w-[742px] my-auto w-full">
                <div className="flex flex-row items-center justify-start w-[34%] md:w-full">
                  <Line className="bg-gradient  h-[23px] w-1" />
                  <Text
                    className="bg-gray-900_7f justify-center pt-1 px-[9px] text-sm text-white-A700 w-auto"
                    size="txtRubikRomanRegular14"
                  >
                    Logistics & Supply Chain Solutions
                  </Text>
                </div>
                <div className="flex flex-col font-krub gap-6 items-start justify-start max-w-[742px] sm:relative sm:right-[13%] w-full">
                  <div className="flex flex-col gap-1.5 items-start justify-start max-w-[742px] w-full">
                    <Text
                      className="sm:flex sm:flex-col sm:items-center sm:justify-center sm:m-[] sm:ml-2.5 sm:mr-5 sm:my-auto sm:overflow-auto sm:p-2.5 sm:relative sm:right-[] md:text-5xl text-6xl text-white-A700"
                      size="txtRubikRomanBold60"
                    >
                      <>
                        Your Gateway <br />
                        to any Destination in the World
                      </>
                    </Text>
                    <Text
                      className="sm:flex sm:flex-col sm:h-full sm:items-center leading-[151.52%] sm:m-auto max-w-[643px] sm:max-w-[] md:max-w-full sm:p-2.5 sm:relative sm:right-[13px] text-base text-white-A700 sm:w-full"
                      size="txtKrubMedium16"
                    >
                      In augue ligula, feugiat ut nulla consequat. Ut est lacus,
                      molestie in arcu no, iaculis vehicula ipsum. Nunc
                      faucibus, nisl id dapibus finibus, enim diam interdum
                      nulla, sed laoreet risus lectus.{" "}
                    </Text>
                  </div>
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[60px] items-center justify-end p-[18px]"
                    style={{ backgroundImage: "url('images/img_button.png')" }}
                  >
                    <Text
                      className="mt-0.5 text-base text-gray-900"
                      size="txtKrubSemiBold16"
                    >
                      Explore More
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:flex-col flex-row gap-[33px] items-start justify-start max-w-[1200px] mt-24 mx-auto md:px-5 w-full">
          <div className="flex md:flex-1 flex-col gap-[15px] items-start justify-start w-1/4 md:w-full">
            <div className="flex flex-row items-center justify-start w-[33%] md:w-full">
              <Line className="bg-gradient  h-[23px] w-1" />
              <Text
                className="bg-gray-200_7f h-[23px] justify-center px-2 py-0.5 text-gray-900_01 text-sm w-[92px]"
                size="txtRubikRomanRegular14Gray90001"
              >
                What We Do
              </Text>
            </div>
            <Text
              className="sm:text-[31px] md:text-[33px] text-[35px] text-gray-900_01 w-full"
              size="txtRubikRomanSemiBold35"
            >
              Safe & Reliable Cargo Solutions
            </Text>
          </div>
          <div className="flex flex-1 flex-col items-start justify-start max-w-[873px] w-full">
            <div className="md:gap-5 gap-[79px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
              <div className="flex flex-1 sm:flex-col flex-row gap-4 items-start justify-start w-full">
                <Img
                  className="sm:absolute sm:block sm:flex-col h-[115px] sm:items-center sm:justify-center w-[84px]"
                  src="images/img_icon_gray_900_01_115x84.svg"
                  alt="icon"
                />
                <div className="flex sm:flex-1 flex-row gap-6 items-start justify-between w-3/4 sm:w-full">
                  <Line className="bg-blue_gray-100 h-[105px] mb-2.5 w-px" />
                  <div className="flex flex-col gap-[13px] items-start justify-start w-[270px]">
                    <Text
                      className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900_01 w-auto"
                      size="txtRubikRomanRegular25"
                    >
                      Sea Transport Services
                    </Text>
                    <Text
                      className="leading-[151.52%] max-w-[270px] md:max-w-full text-base text-blue_gray-500"
                      size="txtKrubMedium16Bluegray500"
                    >
                      Following the quality of our service thus having gained
                      trust of our many clients.
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 sm:flex-col flex-row gap-4 items-start justify-start w-full">
                <Img
                  className="sm:absolute h-[115px] w-[75px]"
                  src="images/img_icon_gray_900_02.svg"
                  alt="icon"
                />
                <div className="flex sm:flex-1 flex-row gap-6 items-start justify-between w-[77%] sm:w-full">
                  <Line className="bg-blue_gray-100 h-[105px] mb-2.5 w-px" />
                  <div className="flex flex-col gap-[13px] items-start justify-start w-[270px]">
                    <Text
                      className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900_01 w-auto"
                      size="txtRubikRomanRegular25"
                    >
                      Warehousing Services
                    </Text>
                    <Text
                      className="leading-[151.52%] max-w-[270px] md:max-w-full text-base text-blue_gray-500"
                      size="txtKrubMedium16Bluegray500"
                    >
                      Following the quality of our service thus having gained
                      trust of our many clients.
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 sm:flex-col flex-row gap-7 items-start justify-start w-full">
                <Img
                  className="sm:absolute h-[115px] w-[75px]"
                  src="images/img_icon_gray_900_01_115x75.svg"
                  alt="icon"
                />
                <div className="flex sm:flex-1 flex-row gap-6 items-start justify-between w-3/4 sm:w-full">
                  <Line className="bg-blue_gray-100 h-[105px] mb-2.5 w-px" />
                  <div className="flex flex-col gap-[13px] items-start justify-start w-[270px]">
                    <Text
                      className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900_01 w-auto"
                      size="txtRubikRomanRegular25"
                    >
                      Air Fright Services
                    </Text>
                    <Text
                      className="leading-[151.52%] max-w-[270px] md:max-w-full text-base text-blue_gray-500"
                      size="txtKrubMedium16Bluegray500"
                    >
                      Following the quality of our service thus having gained
                      trust of our many clients.
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 sm:flex-col flex-row gap-4 items-start justify-start w-full">
                <Img
                  className="sm:absolute h-[126px] w-[77px]"
                  src="images/img_icon_gray_900_01_126x77.svg"
                  alt="icon"
                />
                <div className="flex sm:flex-1 flex-row gap-7 items-start justify-between w-[77%] sm:w-full">
                  <Line className="bg-blue_gray-100 h-[105px] mb-2.5 w-px" />
                  <div className="flex flex-col gap-[13px] items-start justify-start w-[277px]">
                    <Text
                      className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900_01 w-auto"
                      size="txtRubikRomanRegular25"
                    >
                      Local Shipping Services
                    </Text>
                    <Text
                      className="leading-[151.52%] max-w-[270px] md:max-w-full text-base text-blue_gray-500"
                      size="txtKrubMedium16Bluegray500"
                    >
                      Following the quality of our service thus having gained
                      trust of our many clients.
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:gap-10 gap-28 items-center justify-start max-w-[1920px] mt-[121px] w-full">
          <div className="flex flex-col md:px-5 relative w-full">
            <div className="bg-gradient  flex flex-col items-center justify-start mx-auto w-full">
              <div className="h-[504px] relative w-full">
                <Img
                  className="h-[504px] m-auto object-cover w-full"
                  src="images/img_photo_504x1920.png"
                  alt="photo_One"
                />
                <Img
                  className="absolute sm:flex sm:flex-col h-[504px] sm:h-[] inset-[0] sm:items-center justify-center m-auto object-cover"
                  src="images/img_background.png"
                  alt="background"
                />
              </div>
            </div>
            <div className="md:h-[364px] bg-white-A700 sm:h-[389px] h-[547px] mt-[-138px] mx-auto w-[63%] md:w-full z-[1]">
              <div className="absolute bg-A700 h-[502px] sm:h-px inset-x-[0] mx-auto overflow-x-visible top-[0] w-full"></div>
              <div className="absolute bottom-[0] sm:flex sm:flex-row sm:gap-2.5 md:h-[437px] h-[462px] sm:h-[527px] inset-x-[0] sm:items-center sm:justify-center mx-auto w-[1021px] md:w-full">
                <div className="absolute flex flex-col gap-[25px] items-start justify-start left-[0] top-[0] w-[472px] sm:w-full">
                  <div className="flex flex-col gap-3 items-start justify-start w-[472px] sm:w-full">
                    <div className="flex flex-row items-center justify-start w-[15%] md:w-full">
                      <Line className="bg-gradient  h-[23px] w-1" />
                      <Text
                        className="bg-gray-200_7f justify-center px-2 py-0.5 text-gray-900_01 text-sm w-auto"
                        size="txtRubikRomanRegular14Gray90001"
                      >
                        Why Us
                      </Text>
                    </div>
                    <div className="flex flex-col gap-3 items-start justify-start w-[472px] sm:w-full">
                      <Text
                        className="sm:absolute max-w-[472px] md:max-w-full sm:text-[31px] md:text-[33px] text-[35px] text-gray-900_01"
                        size="txtRubikRomanSemiBold35"
                      >
                        We provide full range global logistics solution
                      </Text>
                      <Text
                        className="leading-[151.52%] sm:m-auto text-base text-blue_gray-500"
                        size="txtKrubMedium16Bluegray500"
                      >
                        <>
                          Leverage agile frameworks to provide a robust synopsis
                          for strategy foster collaborative thinking to further
                          the overall value proposition. <br />
                          <br />
                          Organically grow the holistic world view of disruptive
                          innovation via workplace diversity and empowerment.
                        </>
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[22px] sm:items-center items-start sm:justify-center justify-start w-[325px]">
                    <div className="flex sm:flex-col flex-row gap-[15px] items-center justify-start w-[265px]">
                      <Img
                        className="h-[58px] md:h-auto object-cover w-[58px]"
                        src="images/img_icon_gray_900_02_58x58.png"
                        alt="icon_One"
                      />
                      <Text
                        className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900_01 w-auto"
                        size="txtRubikRomanRegular25"
                      >
                        Delivery on Time
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-[15px] items-center justify-start w-[325px]">
                      <Img
                        className="h-[58px] md:h-auto object-cover w-[58px]"
                        src="images/img_icon_gray_900_01_58x58.png"
                        alt="icon_Two"
                      />
                      <Text
                        className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900_01 w-auto"
                        size="txtRubikRomanRegular25"
                      >
                        Optimized Travel Cost
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="absolute flex flex-col sm:flex-row h-full inset-y-[0] items-center sm:items-end justify-start my-auto right-[0] w-[56%] sm:w-full">
                  <div className="sm:flex sm:flex-row md:h-[415px] h-[462px] sm:items-start sm:justify-start relative w-full">
                    <div className="absolute flex flex-col items-center justify-start right-[0] top-[0] w-[82%]">
                      <Img
                        className="h-[415px] md:h-auto object-cover w-full"
                        src="images/img_photo_415x461.png"
                        alt="photo_Two"
                      />
                    </div>
                    <div className="absolute bottom-[0] md:h-[195px] h-[225px] left-[0] w-[54%]">
                      <div className="absolute bg-white-A700 h-[180px] right-[0] top-[0] w-[68%]"></div>
                      <Img
                        className="absolute bottom-[0] h-[195px] left-[0] object-cover w-[91%]"
                        src="images/img_photo_195x272.png"
                        alt="photo_Three"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start md:px-5 w-[54%] md:w-full">
            <div className="md:h-40 sm:h-[142px] h-[143px] relative w-full">
              <div className="flex flex-col m-auto w-full">
                <Line className="bg-blue_gray-100_01 h-px mx-auto w-full" />
                <Line className="bg-blue_gray-100_01 h-[143px] mb-auto mt-[-1px] mx-auto w-px z-[1]" />
              </div>
              <div className="absolute bottom-[26%] flex md:flex-col flex-row md:gap-10 inset-x-[0] items-center justify-between max-w-[855px] mx-auto w-full">
                <div className="flex flex-row gap-4 items-center justify-start w-[326px]">
                  <Text
                    className="sm:text-[40px] md:text-[46px] text-[50px] text-gray-900_01 w-auto"
                    size="txtRubikRomanSemiBold50"
                  >
                    1294
                  </Text>
                  <div className="bg-gradient  h-[17px] w-[17px]"></div>
                  <Text
                    className="text-gray-900_01 text-xl w-auto"
                    size="txtLeagueSpartanRegular20"
                  >
                    Delivered Packages
                  </Text>
                </div>
                <div className="flex flex-row gap-[11px] items-center justify-start w-[301px]">
                  <Text
                    className="sm:text-[40px] md:text-[46px] text-[50px] text-gray-900_01 w-auto"
                    size="txtRubikRomanSemiBold50"
                  >
                    3594
                  </Text>
                  <div className="bg-gradient  h-[17px] w-[17px]"></div>
                  <Text
                    className="text-gray-900_01 text-xl w-auto"
                    size="txtLeagueSpartanRegular20"
                  >
                    Satisfied Clients
                  </Text>
                </div>
              </div>
            </div>
            <Line className="bg-blue_gray-100_01 h-px w-full" />
          </div>
        </div>
        <div className="h-[759px] mt-24 md:px-5 relative w-full">
          <div className="flex flex-col md:gap-10 gap-[65px] items-center justify-start max-w-[1672px] mb-[-249.91px] mx-auto w-full z-[1]">
            <div className="flex flex-col gap-[35px] items-center justify-start max-w-[1672px] w-full">
              <div className="flex flex-col items-center justify-start">
                <Text
                  className="sm:text-[31px] md:text-[33px] text-[35px] text-center text-gray-900_01"
                  size="txtRubikRomanSemiBold35"
                >
                  Transporting Across The World
                </Text>
              </div>
              <List
                className="sm:flex-col flex-row gap-[18px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-center max-w-[1672px] w-full"
                orientation="horizontal"
              >
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <div className="h-[407px] relative w-full">
                    <Img
                      className="h-[407px] m-auto object-cover w-full"
                      src="images/img_photo_407x320.png"
                      alt="photo"
                    />
                    <div className="absolute bg-gradient2  flex flex-col h-full inset-[0] items-start justify-center m-auto p-[19px] w-full">
                      <div className="flex flex-col gap-1 items-start justify-start md:ml-[0] ml-[5px] mt-[316px] w-52">
                        <Text
                          className="text-white-A700 text-xl w-auto"
                          size="txtRubikRomanMedium20"
                        >
                          Liquid Transportation
                        </Text>
                        <Text
                          className="text-base text-yellow-700 w-auto"
                          size="txtKrubMedium16Yellow700"
                        >
                          Premium Tankers
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <div className="h-[407px] relative w-full">
                    <Img
                      className="h-[407px] m-auto object-cover w-full"
                      src="images/img_photo_1.png"
                      alt="photo"
                    />
                    <div className="absolute bg-gradient2  flex flex-col h-full inset-[0] items-start justify-center m-auto p-[19px] w-full">
                      <div className="flex flex-col gap-1 items-start justify-start md:ml-[0] ml-[5px] mt-[316px] w-52">
                        <Text
                          className="text-white-A700 text-xl w-auto"
                          size="txtRubikRomanMedium20"
                        >
                          Packaging Solutions
                        </Text>
                        <Text
                          className="text-base text-yellow-700 w-auto"
                          size="txtKrubMedium16Yellow700"
                        >
                          Warehouse Management
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <div className="h-[407px] relative w-full">
                    <Img
                      className="h-[407px] m-auto object-cover w-full"
                      src="images/img_photo_2.png"
                      alt="photo"
                    />
                    <div className="absolute bg-gradient2  flex flex-col h-full inset-[0] items-start justify-center m-auto p-[19px] w-full">
                      <div className="flex flex-col gap-1 items-start justify-start md:ml-[0] ml-[5px] mt-[316px] w-52">
                        <Text
                          className="text-white-A700 text-xl w-auto"
                          size="txtRubikRomanMedium20"
                        >
                          Contract Logistics
                        </Text>
                        <Text
                          className="text-base text-yellow-700 w-auto"
                          size="txtKrubMedium16Yellow700"
                        >
                          Road Transportation
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <div className="h-[407px] relative w-full">
                    <Img
                      className="h-[407px] m-auto object-cover w-full"
                      src="images/img_photo_3.png"
                      alt="photo"
                    />
                    <div className="absolute bg-gradient2  flex flex-col h-full inset-[0] items-start justify-center m-auto p-5 w-full">
                      <div className="flex flex-col gap-1 items-start justify-start ml-1 md:ml-[0] mt-[315px] w-[245px]">
                        <Text
                          className="text-white-A700 text-xl w-auto"
                          size="txtRubikRomanMedium20"
                        >
                          Warehouse & Distribution
                        </Text>
                        <Text
                          className="text-base text-yellow-700 w-auto"
                          size="txtKrubMedium16Yellow700"
                        >
                          Large Warehouse
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <div className="h-[407px] relative w-full">
                    <Img
                      className="h-[407px] m-auto object-cover w-full"
                      src="images/img_photo_4.png"
                      alt="photo"
                    />
                    <div className="absolute bg-gradient2  flex flex-col h-full inset-[0] items-start justify-center m-auto p-[19px] w-full">
                      <div className="flex flex-col gap-1 items-start justify-start md:ml-[0] ml-[5px] mt-[316px] w-[209px]">
                        <Text
                          className="text-white-A700 text-xl w-auto"
                          size="txtRubikRomanMedium20"
                        >
                          Specialized Transport
                        </Text>
                        <Text
                          className="text-base text-yellow-700 w-auto"
                          size="txtKrubMedium16Yellow700"
                        >
                          Ocean Transports
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </List>
            </div>
            <div
              className="bg-cover bg-no-repeat flex flex-col font-krub h-[60px] items-center justify-start p-[19px]"
              style={{
                backgroundImage: "url('images/img_button_yellow_700.svg')",
              }}
            >
              <Text
                className="text-base text-white-A700"
                size="txtKrubSemiBold16WhiteA700"
              >
                More Work
              </Text>
            </div>
          </div>
          <div className="bg-gradient1  h-[400px] mt-auto mx-auto w-full"></div>
        </div>
        <div className="flex flex-col gap-10 items-start justify-start max-w-[1200px] mt-[98px] mx-auto md:px-5 w-full">
          <div className="flex sm:flex-col flex-row md:gap-10 items-end justify-between max-w-[1199px] w-full">
            <div className="flex sm:flex-1 flex-col gap-[13px] items-start justify-start w-[404px] sm:w-full">
              <div className="flex flex-row items-center justify-start w-1/4 md:w-full">
                <Line className="bg-gradient  h-[23px] w-1" />
                <Text
                  className="bg-gray-200_7f justify-center px-[9px] py-0.5 text-gray-900_01 text-sm w-auto"
                  size="txtRubikRomanRegular14Gray90001"
                >
                  Testimonial
                </Text>
              </div>
              <Text
                className="sm:text-[31px] md:text-[33px] text-[35px] text-gray-900_01 w-auto"
                size="txtRubikRomanSemiBold35"
              >
                What Our Customer Say
              </Text>
            </div>
            <Img
              className="sm:flex-1 h-[43px] md:h-auto object-cover w-24 sm:w-full"
              src="images/img_aerrow.png"
              alt="aerrow"
            />
          </div>
          <List
            className="sm:flex-col flex-row font-krub md:gap-5 grid md:grid-cols-1 grid-cols-2 justify-start max-w-[1200px] w-full"
            orientation="horizontal"
          >
            <div className="bg-gray-100 flex md:flex-1 flex-col items-start justify-start sm:ml-[0] md:px-10 sm:px-5 px-[72px] py-[62px] w-[601px] md:w-full">
              <div className="flex flex-col gap-6 items-start justify-start w-[456px] sm:w-full">
                <div className="flex flex-row items-center justify-between w-[455px] sm:w-full">
                  <div className="flex flex-row gap-2.5 items-center justify-start w-[249px]">
                    <div className="flex flex-col h-[91px] items-center justify-start w-[91px]">
                      <Img
                        className="h-[91px] md:h-auto rounded-[50%] w-[91px]"
                        src="images/img_photo_91x91.png"
                        alt="photo"
                      />
                    </div>
                    <div className="flex flex-col gap-0.5 items-start justify-start w-[148px]">
                      <Text
                        className="text-gray-900_03 text-xl w-auto"
                        size="txtRubikRomanMedium20Gray90003"
                      >
                        Kathleen Smith
                      </Text>
                      <Text
                        className="text-base text-gray-900_03 w-auto"
                        size="txtKrubMedium16Gray90003"
                      >
                        Fuel Company
                      </Text>
                    </div>
                  </div>
                  <div className="bg-gradient  flex flex-col h-[72px] items-center justify-start p-[19px] rounded-[50%] w-[72px]">
                    <Img
                      className="h-5 my-1.5"
                      src="images/img_user.svg"
                      alt="user"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-8 items-start justify-start w-[456px] sm:w-full">
                  <Text
                    className="italic leading-[151.52%] max-w-[456px] md:max-w-full text-base text-blue_gray-500"
                    size="txtKrubMediumItalic16"
                  >
                    Leverage agile frameworks to provide a robust synopsis for
                    strategy foster collaborative thinking to further the
                    overall value proposition. Organically grow the holistic
                    world view of disruptive innovation via workplace diversity
                    and empowerment.
                  </Text>
                  <div className="flex flex-row items-center justify-start w-2/5 md:w-full">
                    <RatingBar
                      className="flex justify-between w-[180px]"
                      value={5}
                      starCount={5}
                      activeColor="#fcaf3b"
                      size={34}
                    ></RatingBar>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-900_03 flex md:flex-1 flex-col items-start justify-start sm:ml-[0] md:px-10 sm:px-5 px-[72px] py-[62px] w-[601px] md:w-full">
              <div className="flex flex-col gap-6 items-start justify-start w-[456px] sm:w-full">
                <div className="flex flex-row items-center justify-between w-[455px] sm:w-full">
                  <div className="flex flex-row gap-2.5 items-center justify-start w-[262px]">
                    <div className="flex flex-col h-[91px] items-center justify-start w-[91px]">
                      <Img
                        className="h-[91px] md:h-auto rounded-[50%] w-[91px]"
                        src="images/img_photo_5.png"
                        alt="photo"
                      />
                    </div>
                    <div className="flex flex-col gap-0.5 items-start justify-start w-[161px]">
                      <Text
                        className="text-white-A700 text-xl w-auto"
                        size="txtRubikRomanMedium20"
                      >
                        John Martin
                      </Text>
                      <Text
                        className="text-base text-white-A700 w-auto"
                        size="txtKrubMedium16"
                      >
                        Restoration Company
                      </Text>
                    </div>
                  </div>
                  <div className="bg-gradient  flex flex-col h-[72px] items-center justify-start p-[19px] rounded-[50%] w-[72px]">
                    <Img
                      className="h-5 my-1.5"
                      src="images/img_user.svg"
                      alt="user"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-8 items-start justify-start w-[456px] sm:w-full">
                  <Text
                    className="italic leading-[151.52%] max-w-[456px] md:max-w-full text-base text-white-A700"
                    size="txtKrubMediumItalic16WhiteA700"
                  >
                    Leverage agile frameworks to provide a robust synopsis for
                    strategy foster collaborative thinking to further the
                    overall value proposition. Organically grow the holistic
                    world view of disruptive innovation via workplace diversity
                    and empowerment.
                  </Text>
                  <div className="flex flex-row items-center justify-start w-2/5 md:w-full">
                    <RatingBar
                      className="flex justify-between w-[180px]"
                      value={5}
                      starCount={5}
                      activeColor="#fcaf3b"
                      size={34}
                    ></RatingBar>
                  </div>
                </div>
              </div>
            </div>
          </List>
        </div>
        <div className="bg-gray-100 flex flex-col h-[897px] md:h-[998px] items-center justify-center mt-[101px] md:px-5 relative w-full">
          <Img
            className="absolute h-[450px] object-cover right-[0] top-[9%]"
            src="images/img_pattern.png"
            alt="pattern_Eight"
          />
          <div className="absolute sm:flex sm:flex-row h-[897px] sm:h-[] inset-y-[0] sm:items-center sm:justify-center left-[0] my-auto w-[56%] md:w-full">
            <div className="absolute bg-gray-900_03 flex flex-row h-[897px] inset-y-[0] left-[0] my-auto w-[90%] sm:w-auto"></div>
            <div className="absolute h-[610px] inset-y-[0] my-auto right-[0] w-[87%] md:w-full">
              <Img
                className="h-[610px] m-auto object-cover w-full"
                src="images/img_photo_610x929.png"
                alt="photo_Four"
              />
              <div className="absolute bg-gradient3  flex flex-col h-full inset-[0] sm:items-center items-start justify-center sm:justify-start m-auto sm:p-[] sm:pl-[] sm:pr-[] pt-[220px] sm:pt-[] md:px-10 px-[220px] sm:top-[0] w-full">
                <div className="bg-gradient4  h-[139px] md:h-[390px] mt-[251px] sm:pl-5 pl-[33px] relative w-[300px] sm:w-full">
                  <Img
                    className="absolute flex flex-row w-[322px] h-[139px] inset-y-[0] my-auto right-[0]"
                    src="images/img_background_white_a700.svg"
                    alt="background_Four"
                    style={{ backgroundColor: 'orange' }}
                  />

                  <div className="absolute flex flex-row gap-[21px] h-max inset-[0] items-center justify-center m-auto w-[83%]">
                    <Img
                      className="h-20"
                      src="images/img_user_orange_100_01.svg"
                      alt="user"
                    />
                    <Text
                      className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900_01 w-[89%] sm:w-full"
                      size="txtRubikRomanRegular25"
                    >
                      Moving your products across borders
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex flex-col sm:flex-row md:gap-10 gap-14 h-max inset-y-[0] items-end justify-center my-auto sm:right-[-2px] right-px w-[553px] sm:w-full">
            <div className="flex flex-col gap-[18px] items-start justify-start w-[494px] sm:w-full">
              <div className="flex flex-col font-rubik gap-3 items-start justify-start w-[438px] sm:w-full">
                <div className="flex flex-row items-center justify-start w-[24%] md:w-full">
                  <Line className="bg-gradient  h-[23px] w-1" />
                  <Text
                    className="bg-gray-200_7f justify-center px-[9px] py-0.5 text-gray-900_01 text-sm w-auto"
                    size="txtRubikRomanRegular14Gray90001"
                  >
                    Why Choose
                  </Text>
                </div>
                <Text
                  className="sm:absolute sm:bottom-[] max-w-[438px] md:max-w-full sm:text-[31px] md:text-[33px] text-[35px] text-gray-900_01"
                  size="txtRubikRomanSemiBold35"
                >
                  We create opportunity to reach potential
                </Text>
              </div>
              <Text
                className="leading-[151.52%] max-w-[486px] md:max-w-full text-base text-blue_gray-500"
                size="txtKrubMedium16Bluegray500"
              >
                Leverage agile frameworks to provide a robust synopsis for
                strategy foster collaborative thinking to further the overall
                value proposition.{" "}
              </Text>
            </div>
            <List
              className="sm:flex sm:flex-col flex-row md:gap-10 gap-[72px] sm:gap-[] sm:gap-x-[] sm:gap-y-[] grid sm:grid-cols-1 grid-cols-2 sm:items-center sm:justify-center justify-start sm:m-auto sm:overflow-y-visible sm:p-[] sm:pt-px sm:top-[23px] w-[553px] sm:w-full"
              orientation="horizontal"
            >
              <div className="flex flex-col gap-5 items-start justify-start w-[223px]">
                <div className="flex flex-row gap-3 items-center justify-start w-[201px]">
                  <Button
                    className="flex h-[63px] items-center justify-center w-[63px]"
                    color="yellow_700_orange_100"
                  >
                    <Img
                      src="images/img_thumbsup_gray_900_01.svg"
                      alt="thumbsup"
                    />
                  </Button>
                  <Text
                    className="text-gray-900_01 text-xl w-auto"
                    size="txtRubikRomanRegular20"
                  >
                    Safe Package
                  </Text>
                </div>
                <div className="flex flex-row gap-3 items-center justify-start w-[216px]">
                  <Button
                    className="flex h-[63px] items-center justify-center w-[63px]"
                    color="yellow_700_orange_100"
                  >
                    <Img
                      className="h-6"
                      src="images/img_globe.svg"
                      alt="globe"
                    />
                  </Button>
                  <Text
                    className="text-gray-900_01 text-xl w-auto"
                    size="txtRubikRomanRegular20"
                  >
                    Global Tracking
                  </Text>
                </div>
                <div className="flex flex-row gap-3 items-center justify-start w-[223px]">
                  <Button
                    className="flex h-[63px] items-center justify-center w-[63px]"
                    color="yellow_700_orange_100"
                  >
                    <Img
                      className="h-[22px]"
                      src="images/img_clock.svg"
                      alt="clock"
                    />
                  </Button>
                  <Text
                    className="text-gray-900_01 text-xl w-auto"
                    size="txtRubikRomanRegular20"
                  >
                    In Time Delivery
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-5 items-start justify-start w-[258px]">
                <div className="flex flex-row gap-3 items-center justify-start w-[220px]">
                  <Button
                    className="flex h-[63px] items-center justify-center w-[63px]"
                    size="xs"
                    color="yellow_700_orange_100"
                  >
                    <Img
                      className="h-8"
                      src="images/img_thumbsup_gray_900_01_63x63.svg"
                      alt="thumbsup"
                    />
                  </Button>
                  <Text
                    className="text-gray-900_01 text-xl w-auto"
                    size="txtRubikRomanRegular20"
                  >
                    Ship Everyware
                  </Text>
                </div>
                <div className="flex flex-row gap-3 items-center justify-start w-[199px]">
                  <Button
                    className="flex h-[63px] items-center justify-center w-[63px]"
                    color="yellow_700_orange_100"
                  >
                    <Img src="images/img_icon_gray_900_01.svg" alt="icon" />
                  </Button>
                  <Text
                    className="text-gray-900_01 text-xl w-auto"
                    size="txtRubikRomanRegular20"
                  >
                    24/7 Support
                  </Text>
                </div>
                <div className="flex flex-row gap-3 items-center justify-start w-[258px]">
                  <Button
                    className="flex h-[63px] items-center justify-center w-[63px]"
                    color="yellow_700_orange_100"
                  >
                    <Img src="images/img_contrast.svg" alt="contrast" />
                  </Button>
                  <Text
                    className="text-gray-900_01 text-xl w-auto"
                    size="txtRubikRomanRegular20"
                  >
                    Transparant Pricing
                  </Text>
                </div>
              </div>
            </List>
          </div>
        </div>
        <div className="flex flex-col gap-10 items-center justify-start max-w-[1200px] mt-[95px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-4 items-center justify-start w-[307px]">
            <div className="flex flex-row items-center justify-center w-[43%] md:w-full">
              <Line className="bg-gradient  h-[23px] w-1" />
              <Text
                className="bg-gray-200_7f justify-center px-2 py-0.5 text-center text-gray-900_01 text-sm w-auto"
                size="txtRubikRomanRegular14Gray90001"
              >
                The Transporters
              </Text>
            </div>
            <Text
              className="sm:text-[31px] md:text-[33px] text-[35px] text-center text-gray-900_01 w-auto"
              size="txtRubikRomanSemiBold35"
            >
              Meet Expert Team
            </Text>
          </div>
          <List
            className="sm:flex-col flex-row gap-[54px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1200px] w-full"
            orientation="horizontal"
          >
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="md:h-[535px] h-[538px] relative w-full">
                  <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <Img
                          className="flex flex-row h-[426px] md:h-auto object-cover w-full"
                          src="images/img_photo_426x364.png"
                          alt="photo"
                        />
                      </div>
                      <div className="bg-gray-900_01 flex flex-col items-center justify-start p-5 w-full">
                        <div className="flex flex-col items-start justify-start sm:pr-5 pr-[22px] pt-[22px] w-[92%] md:w-full">
                          <div className="flex flex-col gap-0.5 items-start justify-start w-[123px]">
                            <Text
                              className="text-white-A700 text-xl w-auto"
                              size="txtRubikRomanMedium20"
                            >
                              Jessca Arow
                            </Text>
                            <Text
                              className="text-base text-white-A700 w-auto"
                              size="txtKrubMedium16"
                            >
                              Designer
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bg-gradient4  bottom-[15%] flex flex-row items-center justify-start sm:px-5 px-[20.07px] py-[17.06px] right-2.5 rotate-[90deg] w-[162px]">
                    <Img
                      className="h-[21px] w-[117px]"
                      src="images/img_icons.svg"
                      alt="icons"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="md:h-[534px] h-[538px] relative w-full">
                  <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <Img
                          className="h-[426px] md:h-auto object-cover w-full"
                          src="images/img_photo_6.png"
                          alt="photo"
                        />
                      </div>
                      <div className="bg-gray-900_01 flex flex-col items-center justify-start p-5 w-full">
                        <div className="flex flex-col items-start justify-start sm:pr-5 pr-[21px] pt-[21px] w-[92%] md:w-full">
                          <div className="flex flex-col gap-0.5 items-start justify-start w-[149px]">
                            <Text
                              className="text-white-A700 text-xl w-auto"
                              size="txtRubikRomanMedium20"
                            >
                              Kathleen Smith
                            </Text>
                            <Text
                              className="text-base text-white-A700 w-auto"
                              size="txtKrubMedium16"
                            >
                              Designer
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bg-gradient4  bottom-[15%] flex flex-row items-end justify-center sm:px-5 px-[20.07px] py-[17.06px] right-[0] rotate-[90deg] w-[198px]">
                    <Img
                      className="h-[21px] w-[163px]"
                      src="images/img_icons_gray_900_01.svg"
                      alt="icons"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="md:h-[535px] h-[538px] relative w-full">
                  <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <Img
                          className="h-[426px] md:h-auto object-cover w-full"
                          src="images/img_photo_7.png"
                          alt="photo"
                        />
                      </div>
                      <div className="bg-gray-900_01 flex flex-col items-center justify-start p-5 w-full">
                        <div className="flex flex-col items-start justify-start sm:pr-5 pr-[22px] pt-[22px] w-[92%] md:w-full">
                          <div className="flex flex-col gap-0.5 items-start justify-start w-[135px]">
                            <Text
                              className="text-white-A700 text-xl w-auto"
                              size="txtRubikRomanMedium20"
                            >
                              Rebecca Tylor
                            </Text>
                            <Text
                              className="text-base text-white-A700 w-auto"
                              size="txtKrubMedium16"
                            >
                              Designer
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bg-gradient  bottom-[15%] flex flex-col items-end justify-center sm:px-5 px-[20.07px] py-[17.06px] right-[0] rotate-[90deg] w-[104px]">
                    <Img
                      className="h-[21px] w-[70px]"
                      src="images/img_settings.svg"
                      alt="settings"
                    />
                  </div>
                </div>
              </div>
            </div>
          </List>
        </div>
        <div className="bg-gray-900_03 flex flex-col font-krub items-center justify-start max-w-full mt-[101px] md:px-10 sm:px-5 px-[360px] py-[143px] w-full">
          <div className="flex flex-col md:gap-10 gap-[70px] items-center justify-start max-w-[1201px] mx-auto w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-[88px] items-start justify-start max-w-full w-full">
              <div className="flex flex-col gap-8 items-start justify-start w-[353px]">
                <div className="flex flex-col gap-[3px] items-start justify-start w-[353px]">
                  <div className="flex flex-col font-rubik gap-[13px] items-start justify-start w-[343px]">
                    <div className="flex flex-row items-center justify-start w-[22%] md:w-full">
                      <Line className="bg-gradient  h-[23px] w-1" />
                      <Text
                        className="bg-gray-200_19 justify-center px-[9px] py-0.5 text-sm text-white-A700 w-auto"
                        size="txtRubikRomanRegular14"
                      >
                        Contact
                      </Text>
                    </div>
                    <Text
                      className="sm:text-[31px] md:text-[33px] text-[35px] text-white-A700 w-auto"
                      size="txtRubikRomanSemiBold35WhiteA700"
                    >
                      Get in touch with us
                    </Text>
                  </div>
                  <Text
                    className="leading-[151.52%] max-w-[353px] md:max-w-full text-base text-white-A700"
                    size="txtKrubMedium16"
                  >
                    Leverage agile frameworks to provide a robust synopsis for
                    strategy foster collaborative thinking to further the
                    overall value.
                  </Text>
                </div>
                <div className="flex flex-col gap-[30px] items-start justify-start w-64">
                  <div className="flex flex-row gap-3.5 items-center justify-start w-[227px]">
                    <Img
                      className="h-[63px] w-[63px]"
                      src="images/img_lock.svg"
                      alt="lock_One"
                    />
                    <a
                      href="mailto:contact@hvcargologistics.com"
                      className="font-medium leading-[135.02%] text-sm text-white-A700"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Text>
                        <>
                          Email
                          <br />
                          contact@logistics.com
                        </>
                      </Text>
                    </a>
                  </div>
                  <div className="flex flex-row gap-3.5 items-center justify-start w-[184px]">
                    <Button
                      className="border border-indigo-900_01 border-solid flex h-[63px] items-center justify-center w-[63px]"
                      color="indigo_900"
                      size="md"
                      variant="fill"
                    >
                      <Img src="images/img_call.svg" alt="call_One" />
                    </Button>
                    <Text
                      className="leading-[135.02%] text-sm text-white-A700"
                      size="txtKrubMedium14"
                    >
                      <>
                        Call Us <br />
                        (00) 112 365 489
                      </>
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[17px] items-center justify-start w-64">
                    <Img
                      className="h-[63px] w-[63px]"
                      src="images/img_icon.svg"
                      alt="icon_Three"
                    />
                    <Text
                      className="leading-[135.02%] text-sm text-white-A700"
                      size="txtKrubMedium14"
                    >
                      <>
                        Mon - Sat 9.00 - 18.00
                        <br />
                        Sunday Closed
                      </>
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col font-leaguespartan items-center justify-end pt-[43px] w-full">
                <div className="flex flex-col gap-[31px] items-center justify-start max-w-[804px] w-full">
                  <div className="flex sm:flex-col flex-row gap-7 items-start justify-start max-w-[758px] w-full">
                    <Text
                      className="border border-blue_gray-600 border-solid pb-[22px] pl-[29px] pr-[35px] pt-[18px] sm:px-5 text-white-A700 text-xl w-auto"
                      size="txtLeagueSpartanRegular20WhiteA700"
                    >
                      Your name*
                    </Text>
                    <Text
                      className="border border-blue_gray-600 border-solid pb-[22px] pl-[29px] pr-[35px] pt-[18px] sm:px-5 text-white-A700 text-xl w-auto"
                      size="txtLeagueSpartanRegular20WhiteA700"
                    >
                      Email*
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-7 items-start justify-start max-w-[758px] w-full">
                    <Input
                      name="phone"
                      placeholder="Phone Number*"
                      className="leading-[normal] p-0 placeholder:text-white-A700 text-left text-xl w-full"
                      wrapClassName="sm:flex-1 w-[49%] sm:w-full"
                      type="number"
                    ></Input>
                    <Input
                      name="city"
                      placeholder="City*"
                      className="leading-[normal] p-0 placeholder:text-white-A700 text-left text-xl w-full"
                      wrapClassName="sm:flex-1 w-[49%] sm:w-full"
                    ></Input>
                  </div>
                  <div className="flex flex-col gap-[30px] items-start justify-start max-w-[758px] w-full">
                    <TextArea
                      className="bg-transparent border border-blue_gray-600 border-solid font-leaguespartan leading-[normal] pb-[35px] pl-[23px] pr-[35px] pt-[21px] sm:px-5 text-left placeholder:text-white-A700 text-white-A700 text-xl w-full"
                      name="message"
                      placeholder="Your Message"
                    ></TextArea>
                    <Button
                      className="cursor-pointer font-krub font-semibold min-w-[194px] text-base text-center"
                      shape="square"
                      color="yellow_700_orange_100"
                    >
                      Submit Message
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col font-syne items-center sm:justify-center justify-start sm:top-1.5 w-full">
              <div className="flex sm:flex-col flex-row h-[234px] md:h-[488px] sm:items-center sm:justify-center relative w-[1201px] md:w-full">
                <div className="flex sm:flex-col sm:items-center sm:justify-start m-auto w-full">
                  <div className="flex sm:flex-row sm:h-full sm:items-center sm:justify-center sm:m-auto sm:mx-auto my-auto sm:p-[] sm:pb-[] sm:pl-[] sm:pr-[] sm:pt-[] sm:relative w-[76%] md:w-full">
                    <div className="flex flex-col items-center justify-start my-auto w-[67%]">
                      <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
                        <div className="flex md:flex-1 flex-col items-center justify-start w-1/2 md:w-full">
                          <div className="h-[234px] relative w-full">
                            <div className="bg-blue_gray-900 h-[234px] m-auto w-full"></div>
                            <div className="absolute h-[234px] inset-[0] justify-center m-auto w-full">
                              <Img
                                className="h-[234px] m-auto object-cover w-full"
                                src="images/img_photo_234x301.png"
                                alt="photo_Five"
                              />
                              <div className="absolute bg-gradient5  flex flex-col h-full inset-[0] items-center justify-center m-auto p-[47px] md:px-10 sm:px-5 w-full">
                                <div className="flex flex-row gap-[9px] items-start justify-center my-[43px] w-full">
                                  <Img
                                    className="h-[51px] w-[51px]"
                                    src="images/img_star.svg"
                                    alt="star"
                                  />
                                  <Text
                                    className="text-white-A700 text-xl tracking-[11.30px] uppercase"
                                    size="txtSyneBold20"
                                  >
                                    <span className="text-white-A700 font-syne text-left font-bold">
                                      <>
                                        Studio
                                        <br />
                                      </>
                                    </span>
                                    <span className="text-white-A700 tracking-[15.10px] font-syne text-left font-bold">
                                      Green
                                    </span>
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex md:flex-1 flex-row items-center justify-evenly w-1/2 md:w-full">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="h-[234px] relative w-full">
                              <Img
                                className="h-[234px] m-auto object-cover w-full"
                                src="images/img_photo_234x300.png"
                                alt="photo_Six"
                              />
                              <div className="absolute bg-gradient5  flex flex-col h-full inset-[0] items-center justify-center m-auto p-[97px] md:px-10 sm:px-5 w-full">
                                <Img
                                  className="h-[38px]"
                                  src="images/img_norto.svg"
                                  alt="norto"
                                />
                              </div>
                            </div>
                          </div>
                          <Line className="bg-blue_gray-600 h-[234px] w-px" />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row font-timesnewroman items-center justify-evenly ml-[-1px] my-auto w-[34%] z-[1]">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="h-[234px] relative w-full">
                          <Img
                            className="h-[234px] m-auto object-cover w-full"
                            src="images/img_photo_8.png"
                            alt="photo_Seven"
                          />
                          <div className="absolute bg-gradient5  flex flex-col h-full inset-[0] items-center sm:items-start justify-center sm:justify-start m-auto p-[57px] md:px-10 sm:px-5 w-full">
                            <div className="md:h-[119px] h-[47px] my-9 relative w-full">
                              <Text
                                className="absolute h-max inset-y-[0] my-auto right-[0] text-white-A700 text-xl tracking-[11.30px] uppercase"
                                size="txtTimesNewRomanPSMT20"
                              >
                                <>
                                  Points
                                  <br />
                                  one
                                </>
                              </Text>
                              <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                                <div className="flex flex-row items-start justify-between w-full">
                                  <div className="h-[47px] relative w-[47px]">
                                    <Img
                                      className="border border-solid border-white-A700 h-[47px] m-auto w-[47px]"
                                      src="images/img_pattern_47x47.svg"
                                      alt="pattern_Twelve"
                                    />
                                    <div className="absolute h-[38px] inset-[0] justify-center m-auto w-[38px]">
                                      <Img
                                        className="border border-solid border-white-A700 h-[38px] m-auto w-[38px]"
                                        src="images/img_pattern_38x38.svg"
                                        alt="pattern_Thirteen"
                                      />
                                      <div className="absolute h-[30px] inset-[0] justify-center m-auto w-[30px]">
                                        <Img
                                          className="border border-solid border-white-A700 h-[30px] m-auto w-[30px]"
                                          src="images/img_pattern_30x30.svg"
                                          alt="pattern_Fourteen"
                                        />
                                        <Img
                                          className="absolute border border-solid border-white-A700 h-5 inset-[0] justify-center m-auto w-5"
                                          src="images/img_pattern_20x20.svg"
                                          alt="pattern_Fifteen"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex flex-col items-center justify-start mt-7 w-[31%]">
                                    <Line className="bg-white-A700 h-0.5 w-full" />
                                    <Line className="bg-white-A700 h-0.5 mt-0.5 w-full" />
                                    <Line className="bg-white-A700 h-0.5 mt-[3px] w-full" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Line className="bg-blue_gray-600 h-[234px] w-px" />
                    </div>
                  </div>
                  <div className="flex flex-row font-thabit items-center justify-evenly ml-[-1px] my-auto w-1/4 md:w-full z-[1]">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="h-[234px] relative w-full">
                        <Img
                          className="h-[234px] m-auto object-cover w-full"
                          src="images/img_photo_234x299.png"
                          alt="photo_Eight"
                        />
                        <div className="absolute bg-gradient5  flex flex-col h-full inset-[0] items-center justify-center m-auto p-[62px] sm:p-[] sm:pb-[] sm:pl-[] sm:pr-[] sm:pt-[] md:px-10 w-full">
                          <div className="md:h-[110px] h-[52px] my-[29px] relative w-full">
                            <Text
                              className="m-auto text-white-A700 text-xl tracking-[11.30px] uppercase"
                              size="txtThabit20"
                            >
                              <>
                                OutOfThe
                                <br />
                                Sand Box
                              </>
                            </Text>
                            <div className="absolute border border-solid border-white-A700 bottom-[13%] flex flex-col items-center justify-start p-0.5 right-[40%] w-[7%]">
                              <div className="bg-white-A700 h-[5px] w-[88%]"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Line className="bg-blue_gray-600 h-[234px] w-px" />
                  </div>
                </div>
                <Line className="absolute bg-blue_gray-600 flex flex-row h-px inset-x-[0] mx-auto top-[0] w-full" />
              </div>
              <Line className="bg-blue_gray-600 h-px w-full" />
            </div>
          </div>
        </div>
        <div className="flex flex-col font-rubik gap-[39px] items-center justify-start max-w-[955px] mt-[98px] md:px-5 w-full">
          <div className="flex flex-col gap-[13px] items-center justify-start w-[281px]">
            <div className="flex flex-row items-center justify-center w-[29%] md:w-full">
              <Line className="bg-gradient  h-[23px] w-1" />
              <Text
                className="bg-gray-200_7f justify-center pt-1 px-2.5 text-gray-900_01 text-sm w-auto"
                size="txtRubikRomanRegular14Gray90001"
              >
                Our Blog
              </Text>
            </div>
            <Text
              className="sm:text-[31px] md:text-[33px] text-[35px] text-center text-gray-900_01 w-auto"
              size="txtRubikRomanSemiBold35"
            >
              Our Latest News
            </Text>
          </div>
          <List
            className="flex flex-col font-krub gap-[35px] items-start max-w-[955px] w-full"
            orientation="vertical"
          >
            <div className="flex md:flex-1 flex-col gap-7 items-center justify-start my-0 w-[99%] md:w-full">
              <Line className="bg-blue_gray-100_02 h-px w-full" />
              <div className="flex md:flex-col flex-row gap-5 items-start justify-start max-w-[942px] w-full">
                <Img
                  className="md:flex-1 h-[308px] sm:h-auto object-cover w-[453px] md:w-full"
                  src="images/img_image.png"
                  alt="image"
                />
                <div className="flex md:flex-1 flex-col items-center justify-start pb-[186px] w-[10%] md:w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <Img
                      className="h-14"
                      src="images/img_calendar.svg"
                      alt="calendar"
                    />
                    <div className="flex flex-col items-center justify-start w-full">
                      <Text
                        className="sm:text-4xl md:text-[38px] text-[40px] text-center text-gray-900_01"
                        size="txtRubikRomanSemiBold40"
                      >
                        08
                      </Text>
                      <Text
                        className="text-base text-blue_gray-500 text-center"
                        size="txtKrubMedium16Bluegray500"
                      >
                        September
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-row gap-7 items-start justify-between w-[39%] md:w-full">
                  <Line className="bg-blue_gray-100_02 h-[308px] w-px" />
                  <div className="flex flex-col gap-[18px] items-start justify-start mt-2.5 w-[335px]">
                    <div className="flex flex-col gap-4 items-start justify-start w-[335px]">
                      <Text
                        className="max-w-[335px] md:max-w-full sm:text-[21px] md:text-[23px] text-[25px] text-gray-900_01"
                        size="txtRubikRomanRegular25"
                      >
                        Inland freight a worthy solution for your business
                      </Text>
                      <Text
                        className="leading-[151.52%] max-w-[335px] md:max-w-full text-base text-blue_gray-500"
                        size="txtKrubMedium16Bluegray500"
                      >
                        We are dedicated in creating added value for our
                        customers by implementing modern technology in our work.{" "}
                      </Text>
                    </div>
                    <Text
                      className="leading-[166.52%] text-base text-gray-900_01"
                      size="txtKrubMedium16Gray90001"
                    >
                      <>
                        Urgent transport solutions
                        <br />
                        Reliable & experienced staffs
                        <br />
                        Urgent transport solutions
                        <br />
                        Reliable & experienced staffs
                      </>
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-7 items-center justify-start my-0 w-full">
              <Line className="bg-blue_gray-100_02 h-px w-[99%]" />
              <div className="flex md:flex-col flex-row gap-5 items-start justify-start max-w-[955px] w-full">
                <Img
                  className="md:flex-1 h-[308px] sm:h-auto object-cover w-[453px] md:w-full"
                  src="images/img_image_308x453.png"
                  alt="image"
                />
                <div className="flex md:flex-1 flex-col items-center justify-start pb-[186px] w-[9%] md:w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <Img
                      className="h-14"
                      src="images/img_calendar_gray_900_01.svg"
                      alt="calendar"
                    />
                    <div className="flex flex-col items-center justify-start w-full">
                      <Text
                        className="sm:text-4xl md:text-[38px] text-[40px] text-center text-gray-900_01"
                        size="txtRubikRomanSemiBold40"
                      >
                        12
                      </Text>
                      <Text
                        className="text-base text-blue_gray-500 text-center"
                        size="txtKrubMedium16Bluegray500"
                      >
                        September
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-row gap-7 items-start justify-between w-2/5 md:w-full">
                  <Line className="bg-blue_gray-100_02 h-[308px] w-px" />
                  <div className="flex flex-col gap-[18px] items-start justify-start mt-2.5 w-[348px]">
                    <div className="flex flex-col gap-4 items-start justify-start w-[348px]">
                      <Text
                        className="max-w-[348px] md:max-w-full sm:text-[21px] md:text-[23px] text-[25px] text-yellow-700_02"
                        size="txtRubikRomanRegular25Yellow70002"
                      >
                        How technology can help redraw the supply chain map
                      </Text>
                      <Text
                        className="leading-[151.52%] max-w-[335px] md:max-w-full text-base text-blue_gray-500"
                        size="txtKrubMedium16Bluegray500"
                      >
                        We are dedicated in creating added value for our
                        customers by implementing modern technology in our work.{" "}
                      </Text>
                    </div>
                    <Text
                      className="leading-[166.52%] text-base text-gray-900_01"
                      size="txtKrubMedium16Gray90001"
                    >
                      <>
                        Urgent transport solutions
                        <br />
                        Reliable & experienced staffs
                        <br />
                        Urgent transport solutions
                        <br />
                        Reliable & experienced staffs
                      </>
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col items-center justify-start my-0 w-[99%] md:w-full">
              <Line className="bg-blue_gray-100_02 h-px w-full" />
              <div className="flex md:flex-col flex-row gap-5 items-start justify-start max-w-[942px] mt-7 w-full">
                <Img
                  className="md:flex-1 h-[308px] sm:h-auto object-cover w-[453px] md:w-full"
                  src="images/img_image_1.png"
                  alt="image"
                />
                <div className="flex md:flex-1 flex-col items-center justify-start pb-[186px] w-[10%] md:w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <Img
                      className="h-14"
                      src="images/img_calendar_gray_900_01_56x51.svg"
                      alt="calendar"
                    />
                    <div className="flex flex-col items-center justify-start w-full">
                      <Text
                        className="sm:text-4xl md:text-[38px] text-[40px] text-center text-gray-900_01"
                        size="txtRubikRomanSemiBold40"
                      >
                        25
                      </Text>
                      <Text
                        className="text-base text-blue_gray-500 text-center"
                        size="txtKrubMedium16Bluegray500"
                      >
                        September
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-row gap-7 items-start justify-between w-[39%] md:w-full">
                  <Line className="bg-blue_gray-100_02 h-[308px] w-px" />
                  <div className="flex flex-col gap-[18px] items-start justify-start mt-2.5 w-[335px]">
                    <div className="flex flex-col gap-4 items-start justify-start w-[335px]">
                      <Text
                        className="max-w-[335px] md:max-w-full sm:text-[21px] md:text-[23px] text-[25px] text-gray-900_01"
                        size="txtRubikRomanRegular25"
                      >
                        Five things you should have ready for your broker
                      </Text>
                      <Text
                        className="leading-[151.52%] max-w-[335px] md:max-w-full text-base text-blue_gray-500"
                        size="txtKrubMedium16Bluegray500"
                      >
                        We are dedicated in creating added value for our
                        customers by implementing modern technology in our work.{" "}
                      </Text>
                    </div>
                    <Text
                      className="leading-[166.52%] text-base text-gray-900_01"
                      size="txtKrubMedium16Gray90001"
                    >
                      <>
                        Urgent transport solutions
                        <br />
                        Reliable & experienced staffs
                        <br />
                        Urgent transport solutions
                        <br />
                        Reliable & experienced staffs
                      </>
                    </Text>
                  </div>
                </div>
              </div>
              <Line className="bg-blue_gray-100_02 h-px mt-[35px] w-full" />
            </div>
          </List>
          <div
            className="bg-cover bg-no-repeat flex flex-col font-krub h-[60px] items-center justify-end p-[18px]"
            style={{
              backgroundImage: "url('images/img_button_yellow_700.svg')",
            }}
          >
            <Text
              className="mt-0.5 text-base text-white-A700"
              size="txtKrubSemiBold16WhiteA700"
            >
              More Blog
            </Text>
          </div>
        </div>
        <div className="font-krub h-[974px] sm:m-[] mt-[100px] md:px-5 relative w-full">
          <div className="flex md:flex-col flex-row font-rubik md:gap-10 items-start justify-between mb-[undefinedpx] mt-auto mx-auto relative top-[45px] z-[1]">
            <div className="absolute flex flex-col md:gap-10 gap-[77px] items-start justify-start left-[15px] top-[600px] w-[319px]">
              <div className="flex flex-col items-center justify-start w-[66%] md:w-full">
                <div className="flex flex-row gap-[9px] items-start justify-start w-full">
                  <div className="flex flex-col items-start justify-start mt-[3px] w-[14%]">
                    <div className="flex flex-row gap-[5px] items-start justify-evenly w-full">
                      <Img
                        className="h-[13px] w-[13px]"
                        src="images/img_thumbsup.svg"
                        alt="thumbsup_One"
                      />
                      <div className="bg-yellow-700_01 h-2.5 w-2.5"></div>
                    </div>
                    <div className="flex flex-row items-center justify-evenly ml-1 md:ml-[0] w-[86%] md:w-full">
                      <div className="bg-yellow-700_01 h-2.5 w-2.5"></div>
                      <div className="bg-yellow-700_01 h-2.5 w-2.5"></div>
                    </div>
                  </div>
                  <Text
                    className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                    size="txtRubikRomanSemiBold30"
                  >
                    TransitFlow
                  </Text>
                </div>
              </div>
              <div className="flex flex-col font-krub gap-[33px] items-start justify-start w-[319px]">
                <Text
                  className="sm:flex sm:flex-col sm:items-center sm:justify-start leading-[151.52%] sm:m-auto max-w-[319px] md:max-w-full text-base text-gray-200_01"
                  size="txtKrubMedium16Gray20001"
                >
                  Leverage agile frameworks to provide a robust synopsis for
                  strategy collaborative thinking to further the overall value
                  proposition.
                </Text>
                <div className="flex flex-col gap-[30px] items-start justify-start w-[227px]">
                  <div className="flex flex-row gap-3.5 items-center justify-start w-full">
                    <Img
                      className="h-[63px] w-[63px]"
                      src="images/img_lock.svg"
                      alt="lock_Two"
                    />
                    <a
                      href="mailto:contact@hvcargologistics.com"
                      className="font-medium leading-[135.02%] text-sm text-white-A700"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Text>
                        <>
                          Email
                          <br />
                          contact@logistics.com
                        </>
                      </Text>
                    </a>
                  </div>
                  <div className="flex flex-row gap-3.5 items-end justify-start w-[82%] md:w-full">
                    <Button
                      className="border border-indigo-900_01 border-solid flex h-[63px] items-center justify-center mb-[5px] w-[63px]"
                      color="indigo_900"
                      size="md"
                      variant="fill"
                    >
                      <Img src="images/img_call.svg" alt="call_Two" />
                    </Button>
                    <Text
                      className="leading-[135.02%] mt-[11px] text-sm text-white-A700"
                      size="txtKrubMedium14"
                    >
                      <>
                        Call Us <br />
                        (00) 112 365 489
                      </>
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="sm:absolute flex sm:flex-col flex-row sm:gap-[] sm:gap-x-[] sm:gap-y-[] sm:items-center items-start justify-between left-[450px] max-w-[769px] relative top-[606px] sm:top-[] w-full">
              <div className="flex flex-col md:gap-10 gap-[74px] items-start justify-start w-[86px]">
                <Text
                  className="sm:text-[21px] md:text-[23px] text-[25px] text-white-A700 w-auto"
                  size="txtRubikRomanMedium25"
                >
                  Pages
                </Text>
                <Text
                  className="leading-[250.00%] text-base text-white-A700"
                  size="txtKrubMedium16"
                >
                  <>
                    About Us
                    <br />
                    Our Team
                    <br />
                    Our Project
                    <br />
                    Pricing
                    <br />
                    Contact
                  </>
                </Text>
              </div>
              <div className="flex flex-col md:gap-10 gap-[74px] items-start justify-start w-[86px]">
                <Text
                  className="sm:text-[21px] md:text-[23px] text-[25px] text-white-A700 w-auto"
                  size="txtRubikRomanMedium25"
                >
                  Utility
                </Text>
                <Text
                  className="sm:absolute leading-[250.00%] text-base text-white-A700"
                  size="txtKrubMedium16"
                >
                  <>
                    Style Guide
                    <br />
                    Changelog
                    <br />
                    Licenses
                    <br />
                    Protected
                    <br />
                    Not Found
                  </>
                </Text>
              </div>
              <div className="flex flex-col md:gap-10 gap-[85px] items-start justify-start relative w-[317px]">
                <Text
                  className="sm:text-[21px] md:text-[23px] text-[25px] text-white-A700 w-auto"
                  size="txtRubikRomanMedium25"
                >
                  Subscribe
                </Text>
                <div className="flex flex-col font-leaguespartan gap-5 items-start justify-start w-[317px]">
                  <Input
                    name="name_One"
                    placeholder="Email here*"
                    className="!placeholder:text-gray-500 !text-gray-500 leading-[normal] p-0 text-left text-xl w-full"
                    wrapClassName="w-full"
                    type="email"
                  ></Input>
                  <div className="flex flex-row font-krub gap-[35px] items-center justify-start w-[303px]">
                    <Button
                      className="cursor-pointer font-semibold min-w-[148px] text-base text-center"
                      shape="square"
                      color="yellow_700_orange_100"
                    >
                      Send Now
                    </Button>
                    <Img
                      className="h-[21px] w-[120px]"
                      src="images/img_follow_white_a700.svg"
                      alt="follow_One"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-blue_gray-100_03 flex flex-col items-center justify-start mb-[-1px] mx-auto w-full z-[1]">
            <Img
              className="sm:absolute sm:h-[100px] h-[412%] md:h-[412px] object-cover w-full"
              src="images/img_photo_412x1920.png"
              alt="photo_Nine"
            />
          </div>
          <div className="md:h-[562px] h-[563px] sm:h-[564px] mt-auto mx-auto static w-full">
            <div className="bg-gray-900_03 flex flex-col sm:h-[] h-max inset-[0] items-center justify-center m-auto sm:max-w-full sm:p-[auto] py-[18px] w-full">
              <div className="flex flex-col gap-3.5 items-center justify-start mt-[471px] w-full">
                <Line className="bg-blue_gray-600 h-px w-full" />
                <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1195px] w-full">
                  <Text
                    className="text-base text-white-A700 w-auto"
                    size="txtKrubMedium16"
                  >
                    <span className="text-white-A700 font-krub text-left font-medium">
                      Copyright © TransitFlow | Designed by{" "}
                    </span>
                    <span className="text-white-A700 font-krub text-left font-medium">
                      VictorFlow{" "}
                    </span>
                    <span className="text-white-A700 font-krub text-left font-medium">
                      - Powered by{" "}
                    </span>
                    <span className="text-white-A700 font-krub text-left font-medium">
                      Webflow
                    </span>
                    <span className="text-white-A700 font-krub text-left font-medium">
                      .
                    </span>
                  </Text>
                  <Text
                    className="text-base text-blue_gray-400 w-auto"
                    size="txtKrubRegular16"
                  >
                    Style Guide Licenses Changelog Password
                  </Text>
                </div>
              </div>
            </div>
            <div className="absolute bg-white-A700_14 h-[118px] overflow-y-auto right-[0] top-[35%] w-[62%]"></div>
            <div className="absolute bg-white-A700_14 h-[118px] left-[0] rotate-[180deg] top-[0] w-[17%]"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomepagePage;
