import { FunctionComponent, useState, useCallback } from "react";
import {
  Autocomplete,
  TextField,
  Icon,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useNavigate } from "react-router-dom";

const ResultsPage: FunctionComponent = () => {
  const navigate = useNavigate();
  const [dateFieldDateTimePickerValue, setDateFieldDateTimePickerValue] =
    useState<string | null>(null);

  const onFickleflightLogoButtonClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onExploreTextClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onHotelsTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="relative bg-white-200 w-full overflow-hidden flex flex-col items-start justify-start text-left text-9xl text-white-200 font-roboto">
        <header className="self-stretch bg-white-200 h-[77px] flex flex-row p-[22px_80px] box-border items-center justify-center sticky w-full top-[0] [background:white-100] text-left text-xs text-gray-1300 font-roboto lg:pl-[40px] lg:pr-[40px] lg:box-border md:pl-[24px] md:pr-[24px] md:box-border">
          <div className="flex-[1] flex flex-row items-center justify-between">
            <button
              className="cursor-pointer [border:none] p-[0] bg-[transparent] relative w-[174px] h-[33px] overflow-hidden"
              onClick={onFickleflightLogoButtonClick}
            >
              <img
                className="absolute h-[96.97%] w-[99.82%] top-[1.59%] right-[0.18%] bottom-[1.44%] left-[0%] max-w-full max-h-full"
                alt=""
                src="../symbols.svg"
              />
            </button>
            <div className="flex flex-row items-center justify-end gap-[36px] sm:flex">
              <div className="flex flex-row items-center justify-end gap-[30px] md:hidden">
                <div
                  className="relative inline-block cursor-pointer"
                  onClick={onExploreTextClick}
                >
                  Explore
                </div>
                <button className="cursor-pointer [border:none] p-[0] bg-[transparent] relative text-xs font-roboto text-gray-1000 text-left inline-block">
                  Search
                </button>
                <div
                  className="relative inline-block cursor-pointer"
                  onClick={onHotelsTextClick}
                >
                  Hotels
                </div>
                <button className="cursor-pointer [border:none] p-[0] bg-[transparent] relative text-xs font-roboto text-gray-1300 text-left inline-block">
                  Offers
                </button>
              </div>
              <div className="flex flex-row items-center justify-center gap-[12px]">
                <img
                  className="relative w-[24px] h-[24px] overflow-hidden hidden md:flex"
                  alt=""
                  src="../notification.svg"
                />
                <img
                  className="relative w-[24px] h-[24px] overflow-hidden"
                  alt=""
                  src="../notification1.svg"
                />
                <img
                  className="rounded-[38px] w-[36px] h-[36px] object-cover"
                  alt=""
                  src="../top_avatar@2x.png"
                />
              </div>
            </div>
          </div>
        </header>
        <div className="self-stretch [background:linear-gradient(100.3deg,_#114f8b,_#2a9ad7)] flex flex-col items-start justify-start font-baloo-bhai">
          <div className="self-stretch relative h-[362px] sm:h-[480px]">
            <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] [background:linear-gradient(78.78deg,_#114f8b_5.2%,_#2a9ad7)]" />
            <img
              className="absolute h-full w-full top-[0.4px] right-[0px] bottom-[-0.4px] left-[0px] max-w-full max-h-full object-cover"
              alt=""
              src="../banner-background1@2x.png"
            />
            <div className="absolute w-full top-[calc(50%_-_96.5px)] right-[0px] left-[0px] flex flex-col p-[0px_80px] box-border items-center justify-center gap-[20px] md:pl-[30px] md:pr-[30px] md:box-border md:w-full md:top-[calc(44%_-_96.5px_-_0px)] sm:w-full sm:top-[calc(32%_-_96.5px_-_0px)]">
              <div className="self-stretch flex flex-col items-center justify-start">
                <div className="self-stretch relative leading-[67px] inline-block md:text-8xl md:leading-[48px] sm:text-[31px] sm:leading-[40px]">
                  Where are you off too?
                </div>
              </div>
              <div className="self-stretch rounded-[10px] bg-white-200 flex flex-row p-[20px] box-border items-start justify-start md:flex-col">
                <div className="flex-[1] flex flex-row items-start justify-start md:w-full md:flex-[unset] md:self-stretch sm:flex-col">
                  <div className="flex-[1] flex flex-col p-[5px] box-border items-center justify-center sm:w-full sm:flex-[unset] sm:self-stretch">
                    <Autocomplete
                      className="self-stretch"
                      disablePortal
                      options={[
                        "Singapore (SIN)",
                        "Sydney (SYD)",
                        "Siem Reap (REP)",
                        "Shanghai (PVG)Sanya (SYX)",
                      ]}
                      renderInput={(params: any) => (
                        <TextField
                          {...params}
                          color="primary"
                          label="Departure"
                          variant="outlined"
                          placeholder=""
                          helperText=""
                        />
                      )}
                      defaultValue="Singapore -  Changi (SIN)"
                      size="medium"
                    />
                  </div>
                  <div className="flex-[1] flex flex-col p-[5px] box-border items-center justify-center sm:w-full sm:flex-[unset] sm:self-stretch">
                    <Autocomplete
                      className="self-stretch"
                      sx={{ width: "100%" }}
                      disablePortal
                      options={[
                        "Clark (CRK)",
                        "Launceston (LST)",
                        "Kalibo (KLO)",
                        "Colombo CMB",
                        "Melbourne (AVV)",
                        "Los Angeles (LA)",
                      ]}
                      renderInput={(params: any) => (
                        <TextField
                          {...params}
                          color="primary"
                          label="Arrival"
                          variant="outlined"
                          placeholder=""
                          helperText=""
                        />
                      )}
                      defaultValue="Los Angeles (LA)"
                      size="medium"
                    />
                  </div>
                  <div className="flex-[1] flex flex-col p-[5px] box-border items-center justify-center sm:w-full sm:flex-[unset] sm:self-stretch">
                    <div className="self-stretch">
                      <DatePicker
                        label="Date"
                        value={dateFieldDateTimePickerValue}
                        onChange={(newValue: any) => {
                          setDateFieldDateTimePickerValue(newValue);
                        }}
                        renderInput={(params: any) => (
                          <TextField
                            {...params}
                            color="primary"
                            variant="outlined"
                            size="medium"
                            renderInput={{ placeholder: "01/05/2022" }}
                            helperText=""
                            fullWidth
                          />
                        )}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col p-[5px] box-border items-center justify-center md:w-full md:text-left">
                  <button className="cursor-pointer [border:none] p-[0] bg-orange-300 rounded-[4px] w-[164px] h-[56px] overflow-hidden flex flex-col items-center justify-center transition-[0.3s] hover:bg-orange-400 md:mr-[auto] sm:w-[100%!important]">
                    <div className="relative text-sm tracking-[0.46px] leading-[26px] uppercase font-medium font-roboto text-white-200 text-center inline-block w-[146.98px]">
                      Search flights
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row p-[50px_80px] box-border items-start justify-center text-3xl text-gray-900 lg:p-[40px] lg:box-border md:p-[20px_24px] md:box-border">
          <div className="relative w-[350.5px] h-[667px] lg:hidden">
            <div className="absolute top-[0px] left-[0px] w-[311.5px] h-[47px] text-xl">
              <div className="absolute top-[0px] left-[0px] tracking-[0.26px] inline-block w-[219.41px]">
                10 out of 177 Results
              </div>
              <img
                className="absolute top-[46.5px] left-[0px] max-h-full w-[311.5px]"
                alt=""
                src="../vector-2.svg"
              />
            </div>
            <div className="absolute top-[231.4px] left-[0px] w-[221px] h-[106px]">
              <b className="absolute top-[0px] left-[0px] tracking-[0.26px] inline-block w-[189.03px]">
                Booking Options
              </b>
              <FormControlLabel
                className="absolute top-[50px] left-[0px]"
                label="Book on Fickleflight"
                labelPlacement="end"
                control={<Checkbox size="medium" />}
              />
              <FormControlLabel
                className="absolute top-[86px] left-[0px]"
                label="Official Airline Websites"
                labelPlacement="end"
                control={<Checkbox size="medium" />}
              />
            </div>
            <div className="absolute top-[376.6px] left-[0px] w-[310.8px] h-[106px]">
              <b className="absolute top-[0px] left-[0px] tracking-[0.26px] inline-block w-[198.04px]">
                Flight Experience
              </b>
              <FormControlLabel
                className="absolute top-[50px] left-[0px]"
                label="No overnight flights"
                labelPlacement="end"
                control={<Checkbox color="primary" size="medium" />}
              />
              <FormControlLabel
                className="absolute top-[86px] left-[0px]"
                label="No long stop-overs"
                labelPlacement="end"
                control={<Checkbox color="primary" size="medium" />}
              />
            </div>
            <div className="absolute top-[561px] left-[0px] w-[181px] h-[106px]">
              <b className="absolute top-[0px] left-[0px] tracking-[0.26px] inline-block w-[87.77px]">
                Airlines
              </b>
              <FormControlLabel
                className="absolute top-[50px] left-[0px]"
                label="Singapore Airlines"
                labelPlacement="end"
                control={<Checkbox color="primary" size="medium" />}
              />
              <FormControlLabel
                className="absolute top-[86px] left-[0px]"
                label="Qatar Airways"
                labelPlacement="end"
                control={<Checkbox color="primary" size="medium" />}
              />
            </div>
            <div className="absolute top-[86.2px] left-[0px] w-[296.62px] h-[106px]">
              <b className="absolute top-[0px] left-[0px] tracking-[0.26px] inline-block w-[65.26px]">
                Stops
              </b>
              <FormControlLabel
                className="absolute top-[50px] left-[0px]"
                label="1 Stop"
                labelPlacement="end"
                control={<Checkbox size="medium" />}
              />
              <FormControlLabel
                className="absolute top-[86px] left-[0px]"
                label="2 Stops"
                labelPlacement="end"
                control={<Checkbox size="medium" />}
              />
            </div>
            <img
              className="absolute top-[521.3px] left-[0px] max-h-full w-[350.5px]"
              alt=""
              src="../vector-5.svg"
            />
          </div>
          <div className="flex-[1] flex flex-col items-start justify-start gap-[9px] text-base">
            <div className="self-stretch rounded-[6px] bg-white-200 [border:0.7px_solid_#cecece] box-border relative flex flex-row p-[0px_25px] items-center justify-center gap-[50px] sm:flex-col sm:p-[20px_0px] sm:box-border">
              <div className="w-[20%] flex flex-row items-center justify-start gap-[7px] md:flex-col sm:flex-row sm:w-[100%!important] sm:ml-[40px]">
                <img
                  className="relative w-[34.77px] h-[46px] sm:[transform:scale(0.8)]"
                  alt=""
                  src="../turkish.svg"
                />
                <div className="relative tracking-[0.26px] inline-block">
                  Turkish Airlines
                </div>
              </div>
              <div className="flex-[1] flex flex-row items-center justify-between w-[64%] text-2xl text-gray-1000 md:flex-row sm:w-[90%] sm:flex-row sm:p-[0px] sm:box-border sm:mr-[0px!important] sm:flex-[unset] sm:self-stretch mq428small:w-[90%]">
                <div className="relative w-[93px] h-[52px] mq428small:w-[80px]">
                  <div className="absolute h-[48.08%] w-full top-[0%] right-[0%] bottom-[51.92%] left-[0%] tracking-[0.32px] font-medium inline-block mq428small:text-base">
                    11:35 PM
                  </div>
                  <div className="absolute h-[36.54%] w-[79.51%] top-[63.46%] right-[20.49%] bottom-[0%] left-[0%] text-base tracking-[0.26px] text-gray-700 inline-block mq428small:text-base">
                    SIN
                  </div>
                </div>
                <div className="relative w-[121px] h-[55px] text-center text-base text-gray-600 sm:[transform:scale(0.9)]">
                  <img
                    className="absolute h-[27.46%] w-[88.52%] top-[0%] right-[5.5%] bottom-[72.54%] left-[5.98%] max-w-full max-h-full"
                    alt=""
                    src="../flighticon.svg"
                  />
                  <div className="absolute h-[34.55%] w-full top-[65.45%] right-[0%] bottom-[0%] left-[0%] tracking-[0.21px] inline-block mq428small:text-2xs">
                    33H 10M, 1-stop
                  </div>
                </div>
                <div className="relative w-[91px] h-[52px] text-right mq428small:w-[80px]">
                  <div className="absolute h-[48.08%] w-full top-[0%] right-[0%] bottom-[51.92%] left-[0%] tracking-[0.32px] font-medium inline-block mq428small:text-base">
                    4:45 PM
                  </div>
                  <div className="absolute h-[36.54%] w-[81.25%] top-[63.46%] right-[1.1%] bottom-[0%] left-[17.65%] text-base tracking-[0.26px] text-gray-700 inline-block mq428small:text-base">
                    LAX
                  </div>
                </div>
              </div>
              <div className="w-[128px] flex flex-row items-center justify-center text-center text-4xl text-orange-200">
                <img
                  className="relative max-w-full h-[100px] sm:hidden"
                  alt=""
                  src="../vector-1.svg"
                />
                <b className="flex-[1] relative tracking-[0.34px] inline-block">
                  S$ 723
                </b>
              </div>
            </div>
            <div className="self-stretch rounded-[6px] bg-white-200 [border:0.7px_solid_#cecece] box-border relative flex flex-row p-[0px_25px] items-center justify-center gap-[50px] text-center sm:flex-col sm:p-[20px_0px] sm:box-border">
              <div className="w-[20%] flex flex-row items-center justify-start gap-[7px] md:flex-col sm:flex-row sm:w-[100%!important] sm:ml-[40px]">
                <img
                  className="relative w-[34.77px] h-[46px] sm:[transform:scale(0.8)]"
                  alt=""
                  src="../sia.svg"
                />
                <div className="relative tracking-[0.26px] inline-block w-[140px] shrink-0">
                  Singapore Airlines
                </div>
              </div>
              <div className="flex-[1] flex flex-row items-center justify-between w-[64%] text-left text-2xl text-gray-1000 md:flex-row sm:w-[90%] sm:flex-row sm:p-[0px] sm:box-border sm:mr-[0px!important] sm:flex-[unset] sm:self-stretch">
                <div className="relative w-[93px] h-[52px] mq428small:w-[80px]">
                  <div className="absolute h-[48.08%] w-full top-[0%] right-[0%] bottom-[51.92%] left-[0%] tracking-[0.32px] font-medium inline-block mq428small:text-base">
                    8:45 PM
                  </div>
                  <div className="absolute h-[36.54%] w-[79.51%] top-[63.46%] right-[20.49%] bottom-[0%] left-[0%] text-base tracking-[0.26px] text-gray-700 inline-block">
                    SIN
                  </div>
                </div>
                <div className="relative w-[129px] h-[55px] text-center text-base text-gray-600 sm:[transform:scale(0.9)]">
                  <img
                    className="absolute h-[27.46%] w-[83.03%] top-[0%] right-[8.26%] bottom-[72.54%] left-[8.71%] max-w-full max-h-full"
                    alt=""
                    src="../flighticon1.svg"
                  />
                  <div className="absolute h-[34.55%] w-full top-[65.45%] right-[0%] bottom-[0%] left-[0%] tracking-[0.21px] inline-block mq428small:text-2xs">
                    15H 10M, 2-stops
                  </div>
                </div>
                <div className="relative w-[91px] h-[52px] text-right mq428small:w-[80px]">
                  <div className="absolute h-[48.08%] w-full top-[0%] right-[0%] bottom-[51.92%] left-[0%] tracking-[0.32px] font-medium inline-block mq428small:text-base">
                    7:55 PM
                  </div>
                  <div className="absolute h-[36.54%] w-[81.25%] top-[63.46%] right-[1.1%] bottom-[0%] left-[17.65%] text-base tracking-[0.26px] text-gray-700 inline-block">
                    LAX
                  </div>
                </div>
              </div>
              <div className="w-[128px] flex flex-row items-center justify-center text-4xl text-orange-200">
                <img
                  className="relative max-w-full h-[100px] sm:hidden"
                  alt=""
                  src="../vector-1.svg"
                />
                <b className="flex-[1] relative tracking-[0.34px] inline-block">
                  S$ 900
                </b>
              </div>
            </div>
            <div className="self-stretch rounded-[6px] bg-white-200 [border:0.7px_solid_#cecece] box-border relative flex flex-row p-[0px_25px] items-center justify-center gap-[50px] sm:flex-col sm:p-[20px_0px] sm:box-border">
              <div className="w-[20%] flex flex-row items-center justify-start gap-[7px] md:flex-col sm:flex-row sm:w-[100%!important] sm:ml-[40px]">
                <img
                  className="relative w-[34.77px] h-[46px] [transform:scale(0.8)]"
                  alt=""
                  src="../japan.svg"
                />
                <div className="relative tracking-[0.26px] inline-block">
                  Japan Airlines
                </div>
              </div>
              <div className="flex-[1] flex flex-row items-center justify-between w-[64%] text-2xl text-gray-1000 md:flex-row sm:w-[90%] sm:flex-row sm:p-[0px] sm:box-border sm:mr-[0px!important] sm:flex-[unset] sm:self-stretch mq428small:w-[90%]">
                <div className="relative w-[93px] h-[52px] mq428small:w-[80px]">
                  <div className="absolute h-[48.08%] w-full top-[0%] right-[0%] bottom-[51.92%] left-[0%] tracking-[0.32px] font-medium inline-block mq428small:text-base">
                    8:20 PM
                  </div>
                  <div className="absolute h-[36.54%] w-[79.51%] top-[63.46%] right-[20.49%] bottom-[0%] left-[0%] text-base tracking-[0.26px] text-gray-700 inline-block">
                    SIN
                  </div>
                </div>
                <div className="relative w-[121px] h-[55px] text-center text-base text-gray-600 sm:[transform:scale(0.9)]">
                  <img
                    className="absolute h-[27.46%] w-[88.52%] top-[0%] right-[6.33%] bottom-[72.54%] left-[5.15%] max-w-full max-h-full"
                    alt=""
                    src="../flighticon1.svg"
                  />
                  <div className="absolute h-[34.55%] w-full top-[65.45%] right-[0%] bottom-[0%] left-[0%] tracking-[0.21px] inline-block mq428small:text-2xs">
                    17H 30M, 1-stop
                  </div>
                </div>
                <div className="relative w-[91px] h-[52px] text-right mq428small:w-[80px]">
                  <div className="absolute h-[48.08%] w-full top-[0%] right-[0%] bottom-[51.92%] left-[0%] tracking-[0.32px] font-medium inline-block mq428small:text-base">
                    9:50 PM
                  </div>
                  <div className="absolute h-[36.54%] w-[81.25%] top-[63.46%] right-[1.1%] bottom-[0%] left-[17.65%] text-base tracking-[0.26px] text-gray-700 inline-block">
                    LAX
                  </div>
                </div>
              </div>
              <div className="w-[128px] flex flex-row items-center justify-center text-center text-4xl text-orange-200">
                <img
                  className="relative max-w-full h-[100px] sm:hidden"
                  alt=""
                  src="../vector-1.svg"
                />
                <b className="flex-[1] relative tracking-[0.34px] inline-block">
                  S$ 859
                </b>
              </div>
            </div>
            <div className="self-stretch rounded-[6px] bg-white-200 [border:0.7px_solid_#cecece] box-border relative flex flex-row p-[0px_25px] items-center justify-center gap-[50px] sm:flex-col sm:p-[20px_0px] sm:box-border">
              <div className="w-[20%] flex flex-row items-center justify-start gap-[7px] md:flex-col sm:flex-row sm:w-[100%!important] sm:ml-[40px]">
                <img
                  className="relative w-[34.77px] h-[46px] [transform:scale(0.8)]"
                  alt=""
                  src="../ana.svg"
                />
                <div className="relative tracking-[0.26px] inline-block">
                  ANA
                </div>
              </div>
              <div className="flex-[1] flex flex-row items-center justify-between w-[64%] text-2xl text-gray-1000 md:flex-row sm:w-[90%] sm:flex-row sm:p-[0px] sm:box-border sm:mr-[0px!important] sm:flex-[unset] sm:self-stretch mq428small:w-[90%]">
                <div className="relative w-[93px] h-[52px] mq428small:w-[80px]">
                  <div className="absolute h-[48.08%] w-full top-[0%] right-[0%] bottom-[51.92%] left-[0%] tracking-[0.32px] font-medium inline-block mq428small:text-base">
                    6:35 PM
                  </div>
                  <div className="absolute h-[36.54%] w-[79.51%] top-[63.46%] right-[20.49%] bottom-[0%] left-[0%] text-base tracking-[0.26px] text-gray-700 inline-block">
                    SIN
                  </div>
                </div>
                <div className="relative w-[121px] h-[55px] text-center text-base text-gray-600 sm:[transform:scale(0.9)]">
                  <img
                    className="absolute h-[27.46%] w-[88.52%] top-[0%] right-[5.5%] bottom-[72.54%] left-[5.98%] max-w-full max-h-full"
                    alt=""
                    src="../flighticon1.svg"
                  />
                  <div className="absolute h-[34.55%] w-full top-[65.45%] right-[0%] bottom-[0%] left-[0%] tracking-[0.21px] inline-block mq428small:text-2xs">
                    19H 15M, 1-stop
                  </div>
                </div>
                <div className="relative w-[91px] h-[52px] text-right mq428small:w-[80px]">
                  <div className="absolute h-[48.08%] w-full top-[0%] right-[0%] bottom-[51.92%] left-[0%] tracking-[0.32px] font-medium inline-block mq428small:text-base">
                    9:50 PM
                  </div>
                  <div className="absolute h-[36.54%] w-[81.25%] top-[63.46%] right-[1.1%] bottom-[0%] left-[17.65%] text-base tracking-[0.26px] text-gray-700 inline-block">
                    LAX
                  </div>
                </div>
              </div>
              <div className="w-[128px] flex flex-row items-center justify-center text-center text-4xl text-orange-200">
                <img
                  className="relative max-w-full h-[100px] sm:hidden"
                  alt=""
                  src="../vector-1.svg"
                />
                <b className="flex-[1] relative tracking-[0.34px] inline-block">
                  S$ 936
                </b>
              </div>
            </div>
            <div className="self-stretch rounded-[6px] bg-white-200 [border:0.7px_solid_#cecece] box-border relative flex flex-row p-[0px_25px] items-center justify-center gap-[50px] text-center sm:flex-col sm:p-[20px_0px] sm:box-border">
              <div className="w-[20%] flex flex-row items-center justify-start gap-[7px] md:flex-col sm:flex-row sm:w-[100%!important] sm:ml-[40px]">
                <img
                  className="relative w-[34.77px] h-[46px]"
                  alt=""
                  src="../americanairlines.svg"
                />
                <div className="relative tracking-[0.26px] inline-block">
                  American Airlines
                </div>
              </div>
              <div className="flex-[1] flex flex-row items-center justify-between w-[64%] text-left text-2xl text-gray-1000 md:flex-row sm:w-[90%] sm:flex-row sm:p-[0px] sm:box-border sm:mr-[0px!important] sm:flex-[unset] sm:self-stretch mq428small:w-[90%]">
                <div className="relative w-[93px] h-[52px] mq428small:w-[80px]">
                  <div className="absolute h-[48.08%] w-full top-[0%] right-[0%] bottom-[51.92%] left-[0%] tracking-[0.32px] font-medium inline-block mq428small:text-base">
                    8:20 PM
                  </div>
                  <div className="absolute h-[36.54%] w-[79.51%] top-[63.46%] right-[20.49%] bottom-[0%] left-[0%] text-base tracking-[0.26px] text-gray-700 inline-block">
                    SIN
                  </div>
                </div>
                <div className="relative w-[121px] h-[55px] text-center text-base text-gray-600 sm:[transform:scale(0.9)]">
                  <img
                    className="absolute h-[27.46%] w-[88.52%] top-[0%] right-[5.5%] bottom-[72.54%] left-[5.98%] max-w-full max-h-full"
                    alt=""
                    src="../flighticon1.svg"
                  />
                  <div className="absolute h-[34.55%] w-full top-[65.45%] right-[0%] bottom-[0%] left-[0%] tracking-[0.21px] inline-block mq428small:text-2xs">
                    17H 30M, 1-stop
                  </div>
                </div>
                <div className="relative w-[91px] h-[52px] text-right mq428small:w-[80px]">
                  <div className="absolute h-[48.08%] w-full top-[0%] right-[0%] bottom-[51.92%] left-[0%] tracking-[0.32px] font-medium inline-block mq428small:text-base">
                    9:50 AM
                  </div>
                  <div className="absolute h-[36.54%] w-[81.25%] top-[63.46%] right-[1.1%] bottom-[0%] left-[17.65%] text-base tracking-[0.26px] text-gray-700 inline-block">
                    LAX
                  </div>
                </div>
              </div>
              <div className="w-[128px] flex flex-row items-center justify-center text-4xl text-orange-200">
                <img
                  className="relative max-w-full h-[100px] sm:hidden"
                  alt=""
                  src="../vector-1.svg"
                />
                <b className="flex-[1] relative tracking-[0.34px] inline-block">
                  S$ 939
                </b>
              </div>
            </div>
            <div className="self-stretch rounded-[6px] bg-white-200 [border:0.7px_solid_#cecece] box-border relative flex flex-row p-[0px_25px] items-center justify-center gap-[50px] sm:flex-col sm:p-[20px_0px] sm:box-border">
              <div className="w-[20%] flex flex-row items-center justify-start gap-[7px] md:flex-col sm:flex-row sm:w-[100%!important] sm:ml-[40px]">
                <img
                  className="relative w-[34.77px] h-[46px] sm:[transform:scale(0.8)]"
                  alt=""
                  src="../turkish.svg"
                />
                <div className="relative tracking-[0.26px] inline-block">
                  Turkish Airlines
                </div>
              </div>
              <div className="flex-[1] flex flex-row items-center justify-between w-[64%] text-2xl text-gray-1000 md:flex-row sm:w-[90%] sm:flex-row sm:p-[0px] sm:box-border sm:mr-[0px!important] sm:flex-[unset] sm:self-stretch mq428small:w-[90%]">
                <div className="relative w-[93px] h-[52px] mq428small:w-[80px]">
                  <div className="absolute h-[48.08%] w-full top-[0%] right-[0%] bottom-[51.92%] left-[0%] tracking-[0.32px] font-medium inline-block mq428small:text-base">
                    11:35 PM
                  </div>
                  <div className="absolute h-[36.54%] w-[79.51%] top-[63.46%] right-[20.49%] bottom-[0%] left-[0%] text-base tracking-[0.26px] text-gray-700 inline-block">
                    SIN
                  </div>
                </div>
                <div className="relative w-[129px] h-[55px] text-center text-base text-gray-600 sm:[transform:scale(0.9)]">
                  <img
                    className="absolute h-[27.46%] w-[83.03%] top-[0%] right-[8.26%] bottom-[72.54%] left-[8.71%] max-w-full max-h-full"
                    alt=""
                    src="../flighticon1.svg"
                  />
                  <div className="absolute h-[34.55%] w-full top-[65.45%] right-[0%] bottom-[0%] left-[0%] tracking-[0.21px] inline-block mq428small:text-2xs">
                    33H 10M, 2-stops
                  </div>
                </div>
                <div className="relative w-[91px] h-[52px] text-right mq428small:w-[80px]">
                  <div className="absolute h-[48.08%] w-full top-[0%] right-[0%] bottom-[51.92%] left-[0%] tracking-[0.32px] font-medium inline-block mq428small:text-base">
                    4:45 PM
                  </div>
                  <div className="absolute h-[36.54%] w-[81.25%] top-[63.46%] right-[1.1%] bottom-[0%] left-[17.65%] text-base tracking-[0.26px] text-gray-700 inline-block">
                    LAX
                  </div>
                </div>
              </div>
              <div className="w-[128px] flex flex-row items-center justify-center text-center text-4xl text-orange-200">
                <img
                  className="relative max-w-full h-[100px] sm:hidden"
                  alt=""
                  src="../vector-1.svg"
                />
                <b className="flex-[1] relative tracking-[0.34px] inline-block">
                  S$ 673
                </b>
              </div>
            </div>
            <div className="self-stretch rounded-[6px] bg-white-200 [border:0.7px_solid_#cecece] box-border relative flex flex-row p-[0px_25px] items-center justify-center gap-[50px] sm:flex-col sm:p-[20px_0px] sm:box-border">
              <div className="w-[20%] flex flex-row items-center justify-start gap-[7px] md:flex-col sm:flex-row sm:w-[100%!important] sm:ml-[40px]">
                <img
                  className="relative w-[34.77px] h-[46px] [transform:scale(0.8)]"
                  alt=""
                  src="../japan1.svg"
                />
                <div className="relative tracking-[0.26px] inline-block">
                  Japan Airlines
                </div>
              </div>
              <div className="flex-[1] flex flex-row items-center justify-between w-[64%] text-2xl text-gray-1000 md:flex-row sm:w-[90%] sm:flex-row sm:p-[0px] sm:box-border sm:mr-[0px!important] sm:flex-[unset] sm:self-stretch mq428small:w-[90%]">
                <div className="relative w-[93px] h-[52px] mq428small:w-[80px]">
                  <div className="absolute h-[48.08%] w-full top-[0%] right-[0%] bottom-[51.92%] left-[0%] tracking-[0.32px] font-medium inline-block mq428small:text-base">
                    10:25 PM
                  </div>
                  <div className="absolute h-[36.54%] w-[79.51%] top-[63.46%] right-[20.49%] bottom-[0%] left-[0%] text-base tracking-[0.26px] text-gray-700 inline-block">
                    SIN
                  </div>
                </div>
                <div className="relative w-[121px] h-[55px] text-center text-base text-gray-600 sm:[transform:scale(0.9)]">
                  <img
                    className="absolute h-[27.46%] w-[88.52%] top-[0%] right-[5.5%] bottom-[72.54%] left-[5.98%] max-w-full max-h-full"
                    alt=""
                    src="../flighticon1.svg"
                  />
                  <div className="absolute h-[34.55%] w-full top-[65.45%] right-[0%] bottom-[0%] left-[0%] tracking-[0.21px] inline-block mq428small:text-2xs">
                    26H 45M, 1-stop
                  </div>
                </div>
                <div className="relative w-[91px] h-[52px] text-right mq428small:w-[80px]">
                  <div className="absolute h-[48.08%] w-full top-[0%] right-[0%] bottom-[51.92%] left-[0%] tracking-[0.32px] font-medium inline-block mq428small:text-base">
                    9:10 AM
                  </div>
                  <div className="absolute h-[36.54%] w-[81.25%] top-[63.46%] right-[1.1%] bottom-[0%] left-[17.65%] text-base tracking-[0.26px] text-gray-700 inline-block">
                    LAX
                  </div>
                </div>
              </div>
              <div className="w-[128px] flex flex-row items-center justify-center text-center text-4xl text-orange-200">
                <img
                  className="relative max-w-full h-[100px] sm:hidden"
                  alt=""
                  src="../vector-1.svg"
                />
                <b className="flex-[1] relative tracking-[0.34px] inline-block">
                  S$ 859
                </b>
              </div>
            </div>
            <div className="self-stretch rounded-[6px] bg-white-200 [border:0.7px_solid_#cecece] box-border relative flex flex-row p-[0px_25px] items-center justify-center gap-[50px] text-center sm:flex-col sm:p-[20px_0px] sm:box-border">
              <div className="w-[20%] flex flex-row items-center justify-start gap-[7px] md:flex-col sm:flex-row sm:w-[100%!important] sm:ml-[40px]">
                <img
                  className="relative w-[34.77px] h-[46px]"
                  alt=""
                  src="../americanairlines1.svg"
                />
                <div className="relative tracking-[0.26px] inline-block">
                  American Airlines
                </div>
              </div>
              <div className="flex-[1] flex flex-row items-center justify-between w-[64%] text-left text-2xl text-gray-1000 md:flex-row sm:w-[90%] sm:flex-row sm:p-[0px] sm:box-border sm:mr-[0px!important] sm:flex-[unset] sm:self-stretch mq428small:w-[90%]">
                <div className="relative w-[93px] h-[52px] mq428small:w-[80px]">
                  <div className="absolute h-[48.08%] w-full top-[0%] right-[0%] bottom-[51.92%] left-[0%] tracking-[0.32px] font-medium inline-block mq428small:text-base">
                    10:25 PM
                  </div>
                  <div className="absolute h-[36.54%] w-[79.51%] top-[63.46%] right-[20.49%] bottom-[0%] left-[0%] text-base tracking-[0.26px] text-gray-700 inline-block">
                    SIN
                  </div>
                </div>
                <div className="relative w-[121px] h-[55px] text-center text-base text-gray-600 sm:[transform:scale(0.9)]">
                  <img
                    className="absolute h-[27.46%] w-[88.52%] top-[0%] right-[5.5%] bottom-[72.54%] left-[5.98%] max-w-full max-h-full"
                    alt=""
                    src="../flighticon1.svg"
                  />
                  <div className="absolute h-[34.55%] w-full top-[65.45%] right-[0%] bottom-[0%] left-[0%] tracking-[0.21px] inline-block mq428small:text-2xs">
                    26H 45M, 1-stop
                  </div>
                </div>
                <div className="relative w-[91px] h-[52px] text-right mq428small:w-[80px]">
                  <div className="absolute h-[48.08%] w-full top-[0%] right-[0%] bottom-[51.92%] left-[0%] tracking-[0.32px] font-medium inline-block mq428small:text-base">
                    9:10 AM
                  </div>
                  <div className="absolute h-[36.54%] w-[81.25%] top-[63.46%] right-[1.1%] bottom-[0%] left-[17.65%] text-base tracking-[0.26px] text-gray-700 inline-block">
                    LAX
                  </div>
                </div>
              </div>
              <div className="w-[128px] flex flex-row items-center justify-center text-4xl text-orange-200">
                <img
                  className="relative max-w-full h-[100px] sm:hidden"
                  alt=""
                  src="../vector-1.svg"
                />
                <b className="flex-[1] relative tracking-[0.34px] inline-block">
                  S$ 859
                </b>
              </div>
            </div>
            <button className="cursor-pointer [border:none] p-[0] bg-[transparent] relative w-[220px] h-[72px]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[6px] bg-gray-1000" />
              <div className="absolute top-[calc(50%_-_10.5px)] left-[calc(50%_-_81.5px)] text-lg tracking-[0.04em] font-medium font-roboto text-white-200 text-center inline-block">
                Show more results
              </div>
            </button>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start text-center text-lg text-gray-1100">
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch relative bg-gray-100 h-[529px] overflow-hidden">
              <img
                className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full h-[530px] object-cover"
                alt=""
                src="../newsletter-section-background1@2x.png"
              />
              <div className="[position:relative!important] top-[52px] left-[auto!important] w-[549px] flex flex-col p-[20px] box-border items-center justify-start gap-[30px] ml-[auto] mr-[auto] md:p-[24px_0px] md:box-border sm:pl-[24px] sm:pr-[24px] sm:box-border sm:ml-[auto] sm:mr-[auto] sm:[position:relative!important] sm:left-[auto!important] sm:w-full">
                <div className="self-stretch flex flex-col items-center justify-start gap-[7px]">
                  <b className="self-stretch relative tracking-[0.04em] uppercase inline-block">
                    subscribe to our newsletter
                  </b>
                  <b className="self-stretch relative text-5xl inline-block text-gray-1200">
                    Get weekly updates
                  </b>
                </div>
                <div className="self-stretch rounded-[12px] bg-white-200 shadow-[0px_0px_24px_rgba(0,_0,_0,_0.03)] [border:1px_solid_#eaeaea] box-border relative flex flex-col p-[28px_30px] items-start justify-start gap-[17px] text-left text-gray-800">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch relative leading-[34px] inline-block">
                      Fill in your details to join the party!
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <TextField
                        className="[border:none] bg-[transparent] self-stretch"
                        color="primary"
                        variant="outlined"
                        type="text"
                        label="Your name"
                        size="medium"
                        margin="none"
                      />
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <TextField
                        className="[border:none] bg-[transparent] self-stretch"
                        color="primary"
                        variant="outlined"
                        type="text"
                        label="Email address"
                        size="medium"
                        margin="none"
                      />
                    </div>
                  </div>
                  <button className="cursor-pointer [border:none] p-[0] bg-orange-300 rounded-[4px] w-[164px] h-[56px] overflow-hidden flex flex-col items-center justify-center hover:bg-orange-400 sm:w-full sm:hover:bg-orange-300">
                    <div className="overflow-hidden flex flex-col p-[8px_22px] box-border items-start justify-start">
                      <div className="relative text-sm tracking-[0.46px] leading-[26px] uppercase font-medium font-roboto text-white-200 text-left inline-block">
                        submit
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <footer className="self-stretch [background:linear-gradient(91.74deg,_#0b5ba8_25.38%,_#299bd8)] flex flex-row p-[33px_84px] box-border items-start justify-start gap-[44px] text-left text-lg text-white-200 font-roboto lg:p-[40px] lg:box-border md:flex-col md:p-[40px_24px_30px] md:box-border sm:p-[30px_24px] sm:box-border">
              <div className="flex-[1] flex flex-col items-start justify-start gap-[14px] mb-[40px!important] md:flex-[unset] md:self-stretch">
                <img
                  className="relative w-[174px] h-[33px] overflow-hidden"
                  alt=""
                  src="../logo1.svg"
                />
                <div className="self-stretch relative leading-[27px] inline-block">
                  Fickle Flight is your one-stop travel portal. We offer hassle
                  free flight and hotel bookings. We also have all your flight
                  needs in you online shop.
                </div>
                <img
                  className="relative w-[130px] h-[30px]"
                  alt=""
                  src="../social-icons1.svg"
                />
              </div>
              <div className="relative border-r-[1px_solid_rgba(255,_255,_255,_0.2)] box-border w-[1px] h-[157.87px] md:hidden" />
              <div className="flex-[1] flex flex-row items-start justify-between text-base md:flex-[unset] md:self-stretch sm:flex-col">
                <div className="relative w-[197.33px] h-[159.76px] sm:mb-[40px!important]">
                  <div className="absolute top-[47.76px] left-[0px] inline-block w-[135.67px]">
                    About Us
                  </div>
                  <div className="absolute top-[0px] left-[0px] text-xl leading-[27px] font-medium inline-block w-[174.72px]">
                    Company
                  </div>
                  <div className="absolute top-[78.76px] left-[0px] inline-block w-[84.28px]">
                    News
                  </div>
                  <div className="absolute top-[109.76px] left-[0px] inline-block w-[115.11px]">
                    Careers
                  </div>
                  <div className="absolute top-[140.76px] left-[0px] inline-block w-[197.33px]">
                    How we work
                  </div>
                </div>
                <div className="relative w-[197.33px] h-[159.76px] sm:mb-[40px!important]">
                  <div className="absolute top-[47.76px] left-[0px] inline-block w-[109.63px]">
                    Account
                  </div>
                  <div className="absolute top-[0px] left-[0px] text-xl leading-[27px] font-medium inline-block w-[131.56px]">
                    Support
                  </div>
                  <div className="absolute top-[78.76px] left-[0px] inline-block w-[197.33px]">
                    Support Center
                  </div>
                  <div className="absolute top-[109.76px] left-[0px] inline-block w-[52.99px]">
                    FAQ
                  </div>
                  <div className="absolute top-[140.76px] left-[0px] inline-block w-[164.44px]">
                    Accessibility
                  </div>
                </div>
                <div className="relative w-[197.33px] h-[159.76px]">
                  <div className="absolute top-[47.76px] left-[0px] inline-block w-[172.87px]">
                    Covid Advisory
                  </div>
                  <div className="absolute top-[0px] left-[0px] text-xl leading-[27px] font-medium inline-block w-[76.65px]">
                    More
                  </div>
                  <div className="absolute top-[78.76px] left-[0px] inline-block w-[135.36px]">
                    Airline Fees
                  </div>
                  <div className="absolute top-[109.76px] left-[0px] inline-block w-[50.56px]">
                    Tips
                  </div>
                  <div className="absolute top-[140.76px] left-[0px] inline-block w-[197.33px]">
                    Quarantine Rules
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default ResultsPage;
