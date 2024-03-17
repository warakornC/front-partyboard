import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import validateLogin from "../validations/validate-login";
import useAuth from "../hooks/useAuth";
import * as Token from "../utils/local-storage";
import Input from "../components/Input";
import { merchantLogin } from "../api/merchant";


export default function MerchantLogin() {
    const [validateError, setValidateError] = useState(null);
    const { setUser, user } = useAuth();
    const [input, setInput] = useState({ username: "", password: "" });
    const navigate = useNavigate();

    const handleChangeInput = (e) => {
        setValidateError("");
        setInput({ ...input, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        try {
            e.preventDefault();

            const validate = validateLogin(input);
            if (validate) return setValidateError("Email or password invalid");

            const response = await merchantLogin(input);

            Token.setToken(response.data.token);
            setUser(response.data.user);
            navigate("/");


        } catch (err) {
            setValidateError("Email or password invalid");
            console.log(err);
        }
    };

    return (
        <div className="max-w-[1024] w-8/12 mx-auto flex flex-col items-center bg-gray">
            <form
                onSubmit={handleSubmit}
                className=" w-8/12 bg-white h-full  my-12 flex flex-col items-center"
            >
                <div className=" mt-2 mb-6  flex flex-col items-center  w-2/4 gap-6 ">
                    <h1 className="text-xl font-bold ite">เข้าสู่ระบบ</h1>
                    <Input
                        placeholder="ชื่อผู้ใช้งาน/เบอร์โทรศัพท์"
                        onChange={handleChangeInput}
                        name={"username"}
                    />
                    <Input
                        type="password"
                        placeholder="รหัสผ่าน"
                        onChange={handleChangeInput}
                        name={"password"}
                    />
                    <div className="w-full">
                        {validateError ? (
                            <p className="text-sm text-red-500"> {validateError}</p>
                        ) : null}
                        <button className="text-white w-full rounded-lg px-3 py-2 m-0 bg-blue_primary cursor-pointers">
                            ถัดไป
                        </button>
                    </div>

                    <div className="flex justify-end w-full">
                        <Link to={"/register"} className="">
                            <div className="underline" role="button">
                                สมัครสมาชิก
                            </div>
                        </Link>
                    </div>
                    <div className="inline-flex items-center justify-center w-full">
                        <hr className="w-full h-0.5 my-4 bg-gray-200 border-0 rounded" />
                        <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 ">
                           
                        </div>
                    </div>

                    <div className="w-full flex flex-col gap-2"></div>
                </div>

            </form >
        </div >
    );
}