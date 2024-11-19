import ProfileCard from "./Components/profileCard";
import TopBar from "./Components/TopBar";
import ToggleMessage from "./Components/ConditionalRendering";

function App() {
  return (
    <>
      <ToggleMessage />
      {/* <TopBar /> */}
      {/* <ProfileCard
        img1url={
          "https://media.licdn.com/dms/image/v2/C4D16AQEEeiuQoSHeYw/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1659729734476?e=1735171200&v=beta&t=7t2A9Ao3DnIJsxFBCiDtML7dGSPFroMNIGbgB3Hvql0"
        }
        img2url={
          "https://media.licdn.com/dms/image/v2/D4D03AQHWZa_R4M3nAA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1673068073863?e=1735171200&v=beta&t=N2dZWOE8KtAYyMFuIfc4GWDHMEHPaKOpTLAGmxGl8dE"
        }
        name={"Deepak Kumar"}
        position={"Senior Analyst at Capgemini | IIIT-Bh'22"}
        location={"Patna, Bihar"}
        img3url={
          "https://media.licdn.com/dms/image/v2/D4D0BAQH-ZV832H4sdA/company-logo_100_100/company-logo_100_100/0/1705572256355/capgemini_logo?e=1737590400&v=beta&t=cFeZ_d7AMDds_Ad3cPnsrNBWXBJtXhGFdd9a0sFp7eE"
        }
        company={"Capgemini"}
      />

      <ProfileCard
        img1url={
          "https://imgs.search.brave.com/W35CAi_yszlYAoQZ74Xtp1zv42Yv7vFX5-INDi3csfc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzg4LzkxLzA1/LzM2MF9GXzE4ODkx/MDUxMF9YWFFQMnZn/V1JPRVpvMFk4N21v/UFUzQzdCZjFYd1JS/Sy5qcGc"
        }
        img2url={
          "https://imgs.search.brave.com/fxFb02p0lhvniATgoogGkMHnnp6CWNs6-dypLcIN3xo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA5LzIwLzUyLzM3/LzM2MF9GXzkyMDUy/Mzc5Nl9QZ1JFSjNl/SU5NTmZpZjI5N01H/TWx6V2N2anVTRGZT/Vi5qcGc"
        }
        name={"Manish Kumar"}
        position={"Senior Analyst at Microsoft | IIIT-Bh'22"}
        location={"Darbhanga, Bihar"}
        img3url={
          "https://imgs.search.brave.com/xL5-YcXo4PizHJAQqe7cARP8PgVrHtmrNdXOX6i_KCs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tYWls/bWV0ZW9yLmNvbS9s/b2dvcy9hc3NldHMv/UE5HL01pY3Jvc29m/dF9Mb2dvXzEyOHB4/LnBuZw"
        }
        company={"Microsoft"}
      /> */}
    </>
  );
}

export default App;
