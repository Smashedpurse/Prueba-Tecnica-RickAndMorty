import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import SearchBar from "./SearchBar";
import { AppContext } from "../context/AppContext";

describe("SearchBar", () => {
  let mockSearchCharacters;
  let mockGetCharacters;
  let mockContextValue;

  beforeEach(() => {
    mockSearchCharacters = vi.fn();
    mockGetCharacters = vi.fn();

    mockContextValue = {
      searchCharacters: mockSearchCharacters,
      getCharacters: mockGetCharacters,
      state: {},
    };

    render(
      <AppContext.Provider value={mockContextValue}>
        <SearchBar />
      </AppContext.Provider>
    );
  });

  test("renderiza el input con el placeholder correcto", () => {
    const input = screen.getByPlaceholderText("Buscar personaje...");
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue("");
  });

  test("al escribir un valor llama a searchCharacters con ese valor y no llama a getCharacters", () => {
    const input = screen.getByPlaceholderText("Buscar personaje...");

    fireEvent.change(input, { target: { value: "Rick" } });

    expect(mockSearchCharacters).toHaveBeenCalledTimes(1);
    expect(mockSearchCharacters).toHaveBeenCalledWith("Rick");
    expect(mockGetCharacters).not.toHaveBeenCalled();

    expect(input).toHaveValue("Rick");
  });

  test("si el input queda vacío llama a getCharacters(1) y no a searchCharacters", () => {
    const input = screen.getByPlaceholderText("Buscar personaje...");

    fireEvent.change(input, { target: { value: "Rick" } });

    fireEvent.change(input, { target: { value: "" } });

    expect(mockGetCharacters).toHaveBeenCalledTimes(1);
    expect(mockGetCharacters).toHaveBeenCalledWith(1);

    expect(mockSearchCharacters).toHaveBeenCalledTimes(1);

    expect(input).toHaveValue("");
  });
});
