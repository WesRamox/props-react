
export const User = ({ userUrl, role }: {userUrl: string, role?: string}) => {
  return(
    <>
      <img src={userUrl} role={role ? role : "Member"} style={{
        borderRadius: "100%",
        height: "100px",
        width: "100px",
        border: role === "Admin" ? "solid 5px #ea5c5c" : "solid 5px #2490DA"
      }}/>
    </>
  )
}