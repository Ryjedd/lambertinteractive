using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CharDash : MonoBehaviour {

    public float dashAmount = 1;
    public float dashTimer = 0.0f;
    bool isDown = false;

	// Use this for initialization
	void Start () {
	}

    // Update is called once per frame
    private void Update()
    {
        if (Input.GetButton("Dash") && dashTimer <= 0.0f && isDown == false)
        {
            dashTimer = 0.15f;
            dashAmount = 25.0f;
            isDown = true;
        }else if (Input.GetButton("Dash"))
        {
            isDown = true;
        }
        else
        {
            isDown = false;
        }

        if (dashTimer > 0.0f)
        {
           
           
        }
        else
        {
            dashAmount = 1.0f;
        }

        dashTimer -= Time.deltaTime;
    }
    void FixedUpdate () {
        
        

        


    }
}
