import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const DatePickerContainer = styled.div`
    position: relative;
    display: inline-block;
    font-family: sans-serif;
`;

const Input = styled.input`
    padding: 8px 12px;
    font-size: 16px;
    width: 130px;
    cursor: pointer;
`;

const Calendar = styled.div`
    position: absolute;
    top: 40px;
    left: 0;
    background: white;
    border: 1px solid #ccc;
    padding: 10px;
    z-index: 100;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
`;

const CalendarHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;

    button {
        padding: 4px 8px;
        cursor: pointer;
        border: none;
        background-color: #007bff;
        color: white;
        border-radius: 4px;
        font-size: 14px;

        &:hover {
            background-color: #0056b3;
        }
    }
`;

const DaysOfWeek = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 30px);
    text-align: center;
    font-weight: bold;
    margin-bottom: 5px;
`;

const DaysGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 30px);
    gap: 3px;
`;

const Day = styled.div`
  text-align: center;
  padding: 5px 0;
  cursor: pointer;
  border-radius: 4px;
  background-color: ${({ selected }) => (selected ? "#007bff" : "transparent")};
  color: ${({ selected }) => (selected ? "white" : "#333")};

  &:hover {
    background-color: ${({ selected }) => (selected ? "#0056b3" : "#eee")};
  }

  color: ${({ outsideMonth }) => (outsideMonth ? "#aaa" : undefined)};
`;

export default function DatePicker() {
    const [selectedDate, setSelectedDate] = useState(null);
    const [showCalendar, setShowCalendar] = useState(false);
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const ref = useRef();

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                setShowCalendar(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const toggleCalendar = () => setShowCalendar(!showCalendar);

    const generateCalendar = () => {
        const startOfMonth = new Date(
            currentMonth.getFullYear(),
            currentMonth.getMonth(),
            1
        );
        const endOfMonth = new Date(
            currentMonth.getFullYear(),
            currentMonth.getMonth() + 1,
            0
        );

        const startDay = startOfMonth.getDay();
        const endDay = endOfMonth.getDate();

        const days = [];

        const prevMonthEnd = new Date(
            currentMonth.getFullYear(),
            currentMonth.getMonth(),
            0
        ).getDate();
        for (let i = startDay - 1; i >= 0; i--) {
            days.push({
                date: new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, prevMonthEnd - i),
                outsideMonth: true
            });
        }

        for (let i = 1; i <= endDay; i++) {
            days.push({
                date: new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i),
                outsideMonth: false
            });
        }

        const remaining = 7 - (days.length % 7);
        if (remaining < 7) {
            for (let i = 1; i <= remaining; i++) {
                days.push({
                    date: new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, i),
                    outsideMonth: true
                });
            }
        }

        return days;
    };

    const handlePrevMonth = () => {
        setCurrentMonth(
            new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
        );
    };

    const handleNextMonth = () => {
        setCurrentMonth(
            new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
        );
    };

    const handleSelectDate = (date) => {
        setSelectedDate(date);
        setCurrentMonth(date);
        setShowCalendar(false);
    };

    const formatDate = (date) => {
        if (!date) return "";
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear();
        return `${day} / ${month} / ${year}`;
    };


    const calendarDays = generateCalendar();

    return (
        <DatePickerContainer ref={ref}>
            <Input
                onClick={toggleCalendar}
                value={formatDate(selectedDate)}
                readOnly
                placeholder="DD / MM / YYYY"
            />
            {showCalendar && (
                <Calendar>
                    <CalendarHeader>
                        <button onClick={handlePrevMonth}>{"<"}</button>
                        <div>
                            {currentMonth.toLocaleString("default", { month: "long" })}{" "}
                            {currentMonth.getFullYear()}
                        </div>
                        <button onClick={handleNextMonth}>{">"}</button>
                    </CalendarHeader>
                    <DaysGrid>
                        {calendarDays.map(({ date, outsideMonth }) => (
                            <Day
                                key={date.toISOString()}
                                selected={
                                    selectedDate &&
                                    date.toDateString() === selectedDate.toDateString()
                                }
                                outsideMonth={outsideMonth}
                                onClick={() => handleSelectDate(date)}
                            >
                                {date.getDate()}
                            </Day>
                        ))}
                    </DaysGrid>
                </Calendar>
            )}
        </DatePickerContainer>
    );
}