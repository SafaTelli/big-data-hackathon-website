
                                        $(document).ready(function() {

                                          var endDate=new Date(2017,09,07,09,00,00,00);
                                          $('#countdown4').ClassyCountdown({
                                                end: Math.round(endDate.getTime()/1000),
                                                now: Math.round(new Date().getTime()/1000),

                                                labels: true,
                                                style: {

                                                    element: "",
                                                    textResponsive: .5,
                                                    days: {
                                                        gauge: {
                                                            thickness: .03,
                                                            bgColor: "rgba(255,255,255,0.05)",
                                                            fgColor: "#1abc9c"
                                                        },
                                                        textCSS: 'font-family:\'Open Sans\'; font-size:25px; font-weight:300; color:#fff;'
                                                    },
                                                    hours: {
                                                        gauge: {
                                                            thickness: .03,
                                                            bgColor: "rgba(255,255,255,0.05)",
                                                            fgColor: "#2980b9"
                                                        },
                                                        textCSS: 'font-family:\'Open Sans\'; font-size:25px; font-weight:300; color:#fff;'
                                                    },
                                                    minutes: {
                                                        gauge: {
                                                            thickness: .03,
                                                            bgColor: "rgba(255,255,255,0.05)",
                                                            fgColor: "#8e44ad"
                                                        },
                                                        textCSS: 'font-family:\'Open Sans\'; font-size:25px; font-weight:300; color:#fff;'
                                                    },
                                                    seconds: {
                                                        gauge: {
                                                            thickness: .03,
                                                            bgColor: "rgba(255,255,255,0.05)",
                                                            fgColor: "#f39c12"
                                                        },
                                                        textCSS: 'font-family:\'Open Sans\'; font-size:25px; font-weight:300; color:#fff;'
                                                    }

                                                },
                                                onEndCallback: function() {
                                                    console.log("Time out!");
                                                }
                                            });

                                        });
