import PaginationMainPage from "./Pagination";
import { expect, test, vi } from "vitest"
import { fireEvent, render } from "@testing-library/react"
import type { Product } from "../../../Types/Product";



test("it checks render navigation", () => {

    // create mock fnc to see how much times it was called
    const setPage = vi.fn()

    //create random array to render items on the page
    const array: Product[] = Array.from({ length: 9 })

    //render
    const { getByText } = render(
        <PaginationMainPage backupArr={array} setPage={setPage} />
    )

    //select item
    const item = getByText('2') as HTMLButtonElement

    //click to the item
    fireEvent.click(item)

    //It checks if pagination button were rendered
    expect(item).toBeTruthy()

    //It checks that mock function setPage has been called once
    expect(setPage).toHaveBeenCalledTimes(1)

    //It check that mock function setPage have called with number 2
    expect(setPage).toHaveBeenCalledWith(2)



})

