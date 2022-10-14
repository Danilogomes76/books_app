import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBook } from "../../actions/action";
import AlertRemove from "../Alert/index";
import {
  Booksadded,
  Trtittle,
  Table,
  Tritem,
  TdBtnBox,
  TdBookTitle,
} from "./style";

function TableBooks() {
  const dispatch = useDispatch();
  let state = useSelector((state) => { return state.saveOrDelete; });
  const [search, setSearch] = useState("");
  const filtredBooks = search.length > 0 ? state.filter((books) => books.name.includes(search)) : [];

  function remove(b) { { dispatch({ type: "DELETE", payload: b.id }) } }

  return (
    <>
      <Booksadded size={{ "@bp1": "bp1" }}>
        <input
          type="text"
          placeholder="Book name"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          value={search}
        ></input>
        <Table>
          <thead>
            <Trtittle>
              <td>Book name</td>
              <td>Book author</td>
            </Trtittle>
          </thead>
          <tbody>
            {search.length > 0
              ? filtredBooks.map((b) => {
                return (
                  <Tritem key={b.id}>
                    <TdBookTitle>
                      {b.name}
                      <img src={b.src} alt={b.name}></img>
                    </TdBookTitle>
                    <TdBtnBox>
                      {b.author}
                      <button
                        onClick={() => {
                          dispatch(deleteBook(b.id));
                        }}
                      >
                        Remove
                      </button>
                    </TdBtnBox>
                  </Tritem>
                );
              })
              : state.map((b) => {
                return (
                  <Tritem key={b.id}>
                    <TdBookTitle>
                      {b.name}
                      <img src={b.src} alt={b.name}></img>
                    </TdBookTitle>
                    <TdBtnBox>
                      {b.author}
                      <AlertRemove removeFC={remove} livro={b} />
                    </TdBtnBox>
                  </Tritem>
                );
              })}
          </tbody>
        </Table>
      </Booksadded>
    </>
  );
}

export default TableBooks;