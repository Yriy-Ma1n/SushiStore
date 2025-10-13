import PaginationMainPage from "./Pagination";
import { expect, test } from "vitest"
import { render } from "@testing-library/react"
import type { Product } from "../../../Types/Product";



test("it checks render navigation", () => {
    const array:Product[] = Array.from({ length: 9 })
    
    const { getByText } = render(
        <PaginationMainPage backupArr={array} setPage={(i: number) => i} />
    )

    const text = getByText('2')
    expect(text).toBeTruthy()
})