/* eslint-disable no-unused-vars */
import React from 'react'

const EntryForm = (props: {
    formType: string
    error: string
    uid?: string
    email: string
    password: string
    setEmail: (email: string) => void
    setPassword: (password: string) => void
    onSubmit: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}) => {
    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.currentTarget

        if (name === 'userEmail') {
            props.setEmail(value)
        } else if (name === 'userPassword') {
            props.setPassword(value)
        }
    }

    return (
        <div>
            <div className="login">
                {props.error !== '' && <div>{props.error}</div>}
                <form className="">
                    <label htmlFor="userEmail" className="block">
                        Email:
                    </label>
                    <input
                        type="email"
                        className="my-1 p-1 w-full"
                        name="userEmail"
                        value={props.email}
                        placeholder="E.g: example@company.com"
                        id="userEmail"
                        onChange={(event) => onChangeHandler(event)}
                    />
                    <label htmlFor="userPassword" className="block">
                        Password:
                    </label>
                    <input
                        type="password"
                        className="mt-1 mb-3 p-1 w-full"
                        name="userPassword"
                        value={props.password}
                        placeholder="Your Password"
                        id="userPassword"
                        onChange={(event) => onChangeHandler(event)}
                    />
                    <button
                        className="button"
                        onClick={(event) => {
                            props.onSubmit(event)
                        }}
                    >
                        {' '}
                        {props.formType}{' '}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default EntryForm
