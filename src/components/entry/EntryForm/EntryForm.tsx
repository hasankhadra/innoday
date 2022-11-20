/* eslint-disable no-unused-vars */
import React from 'react'
import styles from './EntryForm.module.css'

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
            <div>
                <form className={styles.EntryForm}>
                    <input
                        type="email"
                        className={styles.input}
                        name="userEmail"
                        value={props.email}
                        placeholder="E.g: example@company.com"
                        id="userEmail"
                        onChange={(event) => onChangeHandler(event)}
                    />

                    <input
                        type="password"
                        className={styles.input}
                        name="userPassword"
                        value={props.password}
                        placeholder="Your Password"
                        id="userPassword"
                        onChange={(event) => onChangeHandler(event)}
                    />
                    {props.error !== '' && (
                        <div className={styles.error}>{props.error}</div>
                    )}
                    <button
                        className={styles.button}
                        onClick={(event) => {
                            props.onSubmit(event)
                        }}
                    >
                        {props.formType}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default EntryForm
