import {Metadata} from "next";
import {FilterByTag} from "@/components/recipes/recipe-filter/FilterByTag";
import {RecipeDetails} from "@/components/recipes/recipe-details/RecipeDetails";


type Props = {
    params: {slug?: string[]};
};


export const generateMetadata = async ({params}: Props): Promise<Metadata> => {

    const slug = (await params).slug

    if (slug && slug[0].includes('tag')) {

        return {
            title: "FilterByTagPage metadata",
            description: "You can check recipes by tag",
        }

    }else if (slug && slug[0].includes('id')) {

        return {
            title: "DetailsUserById metadata",
            description: "User details choosen by id",
        }

    }else {
        return {
            title: "SomeError metadata",
            description: "",
        }
    }
}

const SlugPage = async ({params}: Props) => {

    const slug = (await params).slug


if (slug && slug[0].includes('tag')){
    return (
        <div>
            <FilterByTag/>.
        </div>
    );
}else if (slug && slug[0].includes('id')) {
    return (
        <div>
            <RecipeDetails/>
        </div>
    )
}

};

export default SlugPage;