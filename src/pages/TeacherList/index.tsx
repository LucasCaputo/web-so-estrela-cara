import React, { useState, useEffect, FormEvent } from "react";

import PageHeader from "../../components/PageHeader";
import TeacherItem, { Teacher } from "../../components/TeacherItem";
import Input from "../../components/Input";

import "./styles.css";
import api from "../../services/api";

function TeacherList() {
    const [teachers, setTeachers] = useState([]);
    const [time, setTime] = useState("");

    useEffect(() => {
        api.get("classes", {
            params: {
                list_all: true
            }
        }).then((response) => {
            setTeachers(response.data);
        });
    }, []);

    async function searchTeachers(e: FormEvent) {
        e.preventDefault();

        try {
            const response = await api.get("classes", {
                params: {
                    time
                }
            });

            setTeachers(response.data);
        } catch (err) {
            alert("Falha ao consultar api");
        }
    }

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são seus clientes" to="/home">
                <form id="search-teachers" onSubmit={searchTeachers}>
                    <Input
                        name="time"
                        label="Cliente"
                        type="text"
                        value={time}
                        onChange={(e) => {
                            setTime(e.target.value);
                        }}
                        autoComplete="off"
                    />

                    <button type="submit">Buscar</button>
                </form>
            </PageHeader>
            <main>
                {teachers.map((teacher: Teacher) => {
                    return <TeacherItem key={teacher.id} teacher={teacher} />;
                })}
            </main>
        </div>
    );
}

export default TeacherList;
