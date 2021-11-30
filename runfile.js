#!/usr/bin/env node

const yargs = require('yargs/yargs')
const {hideBin} = require('yargs/helpers')

const argv1 = yargs(hideBin(process.argv))
              .command('current',
                  "каката дичь",
                  function (yargs) {
                      return yargs
                          .option('y', {
                              alias: 'year',
                          })
                          .option('m', {
                              alias: 'month',
                          })
                          .option('d', {
                              alias: 'date',
                          })
                  },
                  function (argv) {
                  if ((typeof argv.year === 'undefined' ) &&(typeof argv.date === 'undefined' )&&(typeof argv.month === 'undefined' ))
                  {
                      console.log('current date', new Date())
                  }
                  else
                  {
                      if (typeof argv.year !== 'undefined' ){
                          console.log('Текущий год :', new Date().getFullYear())
                      }
                      if (typeof argv.month !== 'undefined' ){
                          console.log('Текущий месяц:', new Date().getMonth())
                      }
                      if (typeof argv.date !== 'undefined' ){
                          console.log('Дата в календарном месяце:', new Date().getDate())
                      }
                  }
                })
               .command('add'," возможность получать даты в будущем",
                   function (yargs) {
                       return yargs
                           .option('y', {
                               alias: 'year',
                           })
                           .option('m', {
                               alias: 'month',
                           })
                           .option('d', {
                               alias: 'date',
                           })
                   },
                   function (argv) {
                       if (typeof argv.year !== 'undefined' ){

                           var d = new Date();
                           d.setFullYear(d.getFullYear() +argv.year);
                           console.log('Дата в будущем :',d)
                       }
                       if (typeof argv.month !== 'undefined' ){

                           var d = new Date();
                           d.setMonth(d.getMonth() +argv.month);
                           console.log('Дата в будущем :',d)
                       }
                       if (typeof argv.date !== 'undefined' ){

                           var d = new Date();
                           d.setDate(d.getDate() +argv.date);
                           console.log('Дата в будущем :',d)
                       }

                   }
               )
                .command(
                    'sub',
                    ' возможность получать даты в прошлом',
                    function (yargs) {
                        return yargs
                            .option('y', {
                                alias: 'year',
                            })
                            .option('m', {
                                alias: 'month',
                            })
                            .option('d', {
                                alias: 'date',
                            })
                    },
                    function (argv) {
                        if (typeof argv.year !== 'undefined' ){

                            var d = new Date();
                            d.setFullYear(d.getFullYear() -argv.year);
                            console.log('Дата в прошлом :',d)
                        }
                        if (typeof argv.month !== 'undefined' ){

                            var d = new Date();
                            d.setMonth(d.getMonth() -argv.month);
                            console.log('Дата в прошлом :',d)
                        }
                        if (typeof argv.date !== 'undefined' ){

                            var d = new Date();
                            d.setDate(d.getDate() -argv.date);
                            console.log('Дата в прошлом :',d)
                        }

                    }
                    )

argv1.parse()

