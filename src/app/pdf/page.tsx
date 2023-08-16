"use client"
import PrintButton from '@/components/printButton';
import { item } from '@/components/table';
import React, { useContext } from 'react'
import { ItemContext } from '@/Global-State/Contexts/context'
import { client_detail } from '@/Global-State/Contexts/constext'
import { useFormContext } from '@/Global-State/Contexts/context';
import { FormContext } from '@/Global-State/Contexts/constext';

const PrintPage = () => {
    const { item } = useFormContext();
    const { client } = FormContext();
    console.log(item)
    console.log(client)

    const calculateTotal = () => {
        return item.reduce((total:any, product:any) => total + product.quantity * product.pricePerUnit, 0);
    };

    return (
        <div>
            <PrintButton />
            <div className="sm:w-[90%] m-auto py-3" >
                <div className="flex justify-between">
                    <div className="border-t-[10px] border-gray-300 ">
                        <h1 className="font-bold text-5xl">invoice</h1>
                    </div>
                    <div className="rounded-full w-28 bg-slate-200">
                        <h1 className="py-10 text-center">
                            LOGO here
                        </h1>
                        <img src="" alt="" />
                    </div>
                </div>

                <div>
                    <h3 className="font-bold">East Repair Inc.</h3>
                    <p>1912 Harvest Lane</p>
                    <p>New York, NY 122210</p>
                </div>

                <div className="py-10 grid grid-cols-4">
                    <div>
                        <h5 className="font-bold">BILL TO</h5>
                        <p>{client.customer}</p>
                        <p>2 Court Square</p>
                        <p>{client.customer_address}</p>
                    </div>
                    <div>
                        <h5 className="font-bold">SHIP TO</h5>
                        <p>{client.contractor}</p>
                        <p>2 Court Square</p>
                        <p>{client.contractor_address}</p>
                    </div>
                    <div>
                        <h5 className="font-bold">INVOICE #</h5>
                        <p className="font-bold">INVOICE DATE</p>
                        <p className="font-bold">P.O.#</p>
                        <p className="font-bold">DUE DATE</p>
                    </div>
                    <div>
                        <p className="text-right">US-001</p>
                        <p className="text-right">{item.issue_data}11/12/2019</p>
                        <p className="text-right">2312/2019</p>
                        <p className="text-right">2312/2019</p>
                    </div>
                </div>

                <div>
                    <table className="scroll-auto">
                        <tr>
                            <thead className="border-y-4 border-red-500">
                                <th className="font-bold text-xl px-10">QTY</th>
                                <th className="font-bold text-xl px-10">DEDSCRIPTION</th>
                                <th className="font-bold text-xl px-10">UNIT PRICE</th>
                                <th className="font-bold text-xl px-10">AMOUNT</th>
                            </thead>
                            <tbody>
                                {item.map((data: any) => {
                                    return <tr>
                                        <td className="sm:px-14 md:px-16 text-center">{data.quantity}</td>
                                        <td className="sm:px-14 md:px-16 text-center">{data.name}</td>
                                        <td className="sm:px-14 md:px-16 text-center">{data.pricePerUnit}</td>
                                        <td className="sm:px-14 md:px-16 text-center">{data.total_amount}</td>
                                    </tr>
                                })}
                                <tr>
                                    <td colSpan={2} />
                                    <td className="font-bold text-xl px-20">Total</td>
                                    <td className="font-bold text-xl px-20">{calculateTotal()}</td>
                                </tr>
                            </tbody>
                        </tr>
                    </table>
                </div>

                <div className="relative py-5">
                    <img className="absolute right-0 w-28 bg-gray-200 p-2" src="https://th.bing.com/th/id/R.436d8344161303b1c1bbacf5177f98a4?rik=CXO2MXqZKrJJ7g&riu=http%3a%2f%2fclipart-library.com%2fimages%2fpiqK8egqT.gif&ehk=oakdMWMW8dgvvW165UjTogwq9bObLj%2brCEaqd8spJpg%3d&risl=&pid=ImgRaw&r=0" alt="digital signature" />
                </div>

                <div className="flex justify-center pt-28 ">
                    <div>
                        <h5 className="font-bold text-3xl px-2">Thank you</h5>
                    </div>
                    <div className="border-l-4 border-gray-900 px-2">
                        <h5 className="text-red-500 font-bold text-xl">TERMS & CONDITIONS</h5>
                        <p>
                            Payment is due within 15 days
                        </p>
                        <p>Please make checks payable to: East repair Inc.</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PrintPage;



