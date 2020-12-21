import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import IndexPage, { getServerSideProps } from "../../pages";

const MOCKED_USER_DATA = [
  {
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
    },
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
    email: "Sincere@april.biz",
    id: 10,
    name: "Leanne Graham",
    phone: "1-770-736-8031 x56442",
    username: "Bret",
    website: "hildegard.org",
  },
  {
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
    },
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
    email: "Sincere@april.biz",
    id: 2,
    name: "Leanne Graham",
    phone: "1-770-736-8031 x56442",
    username: "Jane",
    website: "hildegard.org",
  },
];

describe("index page", () => {
  test("shows user profiles text", async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => MOCKED_USER_DATA,
      })
    );

    render(<IndexPage />);

    await waitFor(() => {
      const userProfileText = screen.getByText("User Profiles");
      expect(userProfileText).toBeTruthy();
    });
  });

  test("should display the lists of profiles", async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => MOCKED_USER_DATA,
      })
    );

    render(<IndexPage />);

    await waitFor(() => {
      const profileList = screen.getByTestId("profiles-list");
      expect(profileList.children.length).toEqual(2);

      const firstUsername = screen.getByTestId(
        `username-${MOCKED_USER_DATA[0].id}`
      );

      expect(firstUsername.innerHTML).toEqual(
        `Username: ${MOCKED_USER_DATA[0].username}&nbsp;`
      );
    });
  });
});

describe("get server side props function", () => {
  test("props returned", () => {
    const result = getServerSideProps();

    expect(result).toEqual({ props: { some: "data" } });
  });
});
