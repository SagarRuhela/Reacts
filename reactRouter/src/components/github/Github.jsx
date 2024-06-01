import React from "react";
import { useLoaderData } from "react-router-dom";
 function Github() {
    const data = useLoaderData();
    return (
        <div className="bg-gray-100 h-screen">
            <div className="flex justify-center items-center h-20">
                <h1 className="text-2xl font-bold">Github Data</h1>
            </div>
            <div className="flex justify-center items-center h-96">
                <div className="bg-white p-4 rounded-lg shadow-lg">
                    <img
                        src={data.avatar_url}
                        alt="Avatar"
                        className="w-20 h-20 rounded-full mx-auto"
                    />
                    <h2 className="text-xl font-semibold text-center mt-4">
                        {data.login}
                    </h2>
                    <img className =" w-30 "src={data.avatar_url} alt="" />
                    <div className="flex justify-center mt-4">
                        <a
                            href={data.html_url}
                            target="_blank"
                            rel="noreferrer"
                            className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm"
                        >
                            Visit Github
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Github ;
export const getGithubData = async () => {
    const response = await fetch('https://api.github.com/users/SagarRuhela');
    const data = await response.json();
    return data;
}