
import React from "react"
import { expect } from "chai"
import { shallow, render } from "enzyme"
import { Repo } from "../../app/components/GithubRepos"

describe("A suite", () => {
  it("contains spec with an expectation", () => {
    const wrapper = shallow(<Repo name="reactjs" />)
    expect(wrapper.find("li")).to.have.className("repo")
    expect(wrapper).to.contain("reactjs")
  })
})

