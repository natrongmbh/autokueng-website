import { useEffect, useState } from 'react'
import { useUserContext } from '../../contexts/userContext'
import { ClientResponseError } from 'pocketbase';
import { MemberInterface, VehicleInterface } from '../../lib/interfaces';

interface Props {
    members: MemberInterface[];
    vehicles: VehicleInterface[];
}

const Stats = (props: Props) => {

    return(
        <div className="bg-gray-50 pt-12 sm:pt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                <p className="mt-3 text-xl text-gray-500 sm:mt-4">
                </p>
                </div>
            </div>
            <div className="mt-10 pb-12 bg-white sm:pb-16">
                <div className="relative">
                <div className="absolute inset-0 h-1/2 bg-gray-50" />
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto">
                        <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
                            <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Mitarbeitende</dt>
                            <dd id="members" className="order-1 text-5xl font-extrabold text-blue-500">
                                {
                                    props.members?.length
                                }
                            </dd>
                            </div>
                            <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Geöffnet</dt>
                            <dd className="order-1 text-5xl font-extrabold text-blue-500">9.5h</dd>
                            </div>
                            <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Fahrzeuge</dt>
                            <dd className="order-1 text-5xl font-extrabold text-blue-500">
                                {
                                    props.vehicles?.length
                                }
                            </dd>
                            </div>
                        </dl>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats
