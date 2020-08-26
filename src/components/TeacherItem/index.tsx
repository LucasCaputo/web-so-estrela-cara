import React from "react";

import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import Tooltip, { TooltipProps } from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/WhatsApp";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/EditSharp";
import ShopIcon from "@material-ui/icons/AddShoppingCart";

import Table from "../Table"

import "./styles.css";

export interface Teacher {
    id: number;
    avatar: string;
    biography: string;
    cost: number;
    name: string;
    subject: string;
    whatsapp: string;
}
export interface TeacherItemProps {
    teacher: Teacher;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            maxWidth: 740,
            marginTop: "20px"
        },
        expand: {
            transform: "rotate(0deg)",
            marginLeft: "auto",
            transition: theme.transitions.create("transform", {
                duration: theme.transitions.duration.shortest
            })
        },
        expandOpen: {
            transform: "rotate(180deg)"
        },
        avatar: {
            backgroundColor: red[500]
        }
    })
);

const useStylesBootstrap = makeStyles((theme: Theme) => ({
    arrow: {
        color: theme.palette.common.black
    },
    tooltip: {
        backgroundColor: theme.palette.common.black,
        fontSize: "12px"
    }
}));

function BootstrapTooltip(props: TooltipProps) {
    const classes = useStylesBootstrap();

    return <Tooltip arrow classes={classes} {...props} />;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        S
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title="Sandar Paella"
                subheader="Cliente desde maio, 2008"
            />
            <CardContent>
                <Typography variant="body1" color="textSecondary" component="p">
                    Último serviço realizado: <strong>25-08-2020</strong>
                    <p>
                        Geralmente faz: <strong>Luzes loiros 7.2</strong>
                    </p>
                    <p>
                        Último valor cobrado: <strong>R$350,00</strong>
                    </p>
                    <p>Cliente categoria Ouro</p>
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <BootstrapTooltip
                    title="Cliente Top"
                    aria-label="Melhores Clientes"
                >
                    <IconButton aria-label="Melhores Clientes">
                        <FavoriteIcon />
                    </IconButton>
                </BootstrapTooltip>

                <BootstrapTooltip title="Whatsapp" aria-label="Whatsapp">
                    <IconButton aria-label="Whatsapp">
                        <ShareIcon />
                    </IconButton>
                </BootstrapTooltip>

                <BootstrapTooltip title="Venda" aria-label="Venda">
                    <IconButton aria-label="Venda">
                        <ShopIcon />
                    </IconButton>
                </BootstrapTooltip>
                <Typography
                    className="cursor-pointer"
                    variant="body1"
                    color="textSecondary"
                    component="p"
                    onClick={handleExpandClick}
                >
                    Histórico Completo
                </Typography>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Table/>
                </CardContent>
            </Collapse>
        </Card>

        // <article className="teacher-item">
        //     <header>
        //         <img src={teacher.avatar} alt="Sua foto" />
        //         <div>
        //             <strong>{teacher.name}</strong>
        //             <span>{teacher.subject}</span>
        //         </div>
        //     </header>

        //     <p>{teacher.biography}</p>

        //     <footer>
        //         <p>
        //             Preço/hora
        //             <strong>R$ {teacher.cost}</strong>
        //         </p>
        //         <a href={`"https://wa.me/${teacher.whatsapp}"`}>
        //             <img src={whatsappIcon} alt="Whatsapp" />
        //             Entrar em contato
        //         </a>
        //     </footer>
        // </article>
    );
};

export default TeacherItem;
