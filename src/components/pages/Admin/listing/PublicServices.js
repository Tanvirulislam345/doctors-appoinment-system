import * as React from "react";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import { HeaderCaption, HeaderWrapper } from "../../../../styled/All.Styled";
import { Container, Divider } from "@mui/material";
import { Box } from "@mui/system";

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

const PublicServices = () => {
  const [chipData, setChipData] = React.useState([
    { key: 0, label: "Edit" },
    { key: 1, label: "Edit" },
    { key: 2, label: "Edit" },
    { key: 3, label: "Edit" },
    { key: 4, label: "Edit" },
  ]);

  const handleDelete = (chipToDelete) => () => {
    
  };

  return (
    <Paper>
      <Container>
        <HeaderWrapper>
          <HeaderCaption>Public services</HeaderCaption>
          <i
            class="fas fa-search fa-lg"
            style={{ color: "#EDF1F5", padding: "0px 10px" }}
          ></i>
        </HeaderWrapper>
        <Divider style={{ marginBottom: "18px" }} />
        {
            chipData.map(data =>{
                <Box data={data}>
                    <Box>
                      <span>{data.level}</span>
                    </Box>
                </Box>
            })
        }
        
      </Container>
    </Paper>
  );
};

export default PublicServices;
